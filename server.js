const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('.')); // Serve static files from the current directory

// Load essay grading criteria
let essayGradingCriteria;
fs.readFile('./essayGrader/dataset.json', (err, data) => {
    if (err) {
        console.error('Error reading the essay grading data:', err);
        return;
    }
    essayGradingCriteria = JSON.parse(data);
});

// Load code grading criteria
let codeGradingCriteria;
fs.readFile('./codeGrader/dataset.json', (err, data) => {
    if (err) {
        console.error('Error reading the code grading data:', err);
        return;
    }
    codeGradingCriteria = JSON.parse(data);
});

// Essay Grader functionality
app.post('/gradeEssay', (req, res) => {
    const essay = req.body.essay;
    const result = gradeEssay(essay);
    res.json(result);
});

function gradeEssay(essay) {
    let totalScore = 0;
    let feedback = '';

    essayGradingCriteria.forEach(criterion => {
        const { name, keywords, score } = criterion;
        const foundKeywords = keywords.filter(keyword => essay.toLowerCase().includes(keyword.toLowerCase()));
        if (foundKeywords.length > 0) {
            totalScore += score;
            feedback += `${name}: Met (Keywords: ${foundKeywords.join(', ')})<br>`;
        } else {
            feedback += `${name}: Not Met<br>`;
        }
    });

    return {
        totalScore: totalScore,
        feedback: feedback
    };
}

// Code Grader functionality
app.post('/gradeCode', (req, res) => {
    const code = req.body.code;
    const result = gradeCode(code);
    res.json(result);
});

function gradeCode(code) {
    let totalScore = 0;
    const feedback = [];

    codeGradingCriteria.forEach(criterion => {
        const { name, keywords, score } = criterion;
        const foundKeywords = keywords.filter(keyword => code.toLowerCase().includes(keyword.toLowerCase()));
        if (foundKeywords.length > 0) {
            totalScore += score;
            feedback.push(`${name}: Met (Keywords: ${foundKeywords.join(', ')})`);
        } else {
            feedback.push(`${name}: Not Met`);
        }
    });

    return {
        totalScore: totalScore,
        feedback: feedback
    };
}

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
