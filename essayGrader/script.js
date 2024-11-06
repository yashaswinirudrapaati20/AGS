document.getElementById('submitButton').addEventListener('click', function () {
    const essayInput = document.getElementById('essayInput').value;
    gradeEssay(essayInput);
});

async function gradeEssay(essay) {
    const response = await fetch('/gradeEssay', {  // Match the endpoint here
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ essay }),
    });

    if (!response.ok) {
        console.error('Failed to grade essay:', response.statusText);
        return;
    }

    const result = await response.json();
    displayResult(result);
}

function displayResult(result) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Total Score: ${result.totalScore} / 60<br>${result.feedback}`;
}
