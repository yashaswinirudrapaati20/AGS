document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('gradeCodeButton').addEventListener('click', function () {
        const code = document.getElementById('codeInput').value;

        fetch('/gradeCode', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ code: code })
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('codeResult').innerHTML = `
                Total Score: ${data.totalScore}<br>
                Feedback:<br>${data.feedback.join('<br>')}
            `;
        })
        .catch(error => console.error('Error:', error));
    });
});
