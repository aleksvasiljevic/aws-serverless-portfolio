document.getElementById('fetchBtn').addEventListener('click', () => {
    const output = document.getElementById('output');
    output.innerText = "Lade Daten aus AWS Lambda...";
    
    // Später verbinden wir hier das API Gateway!
    setTimeout(() => {
        output.innerText = "S3 Frontend aktiv! Sobald Lambda & API Gateway stehen, kommen hier Live-Daten an.";
    }, 1000);
});