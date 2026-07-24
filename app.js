document.addEventListener('DOMContentLoaded', () => {
    const fetchBtn = document.getElementById('fetchBtn');
    const resultElement = document.getElementById('output');

    if (fetchBtn) {
        fetchBtn.addEventListener('click', async () => {
            resultElement.textContent = 'Lade Daten von AWS Lambda...';

            try {
                const response = await fetch('https://7al9ptotsc.execute-api.eu-central-1.amazonaws.com/data');
                const data = await response.json();
                resultElement.textContent = JSON.stringify(data, null, 2);
            } catch (error) {
                resultElement.textContent = 'Fehler beim Laden der Daten!';
                console.error('Fetch Error:', error);
            }
        });
    }
});