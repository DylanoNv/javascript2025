function generateTable(number) {
    const container = document.getElementById('output');
    container.innerHTML = '';

    for (let i = 1; i <= 10; i++) {
        const result = i * number;
        const line = i + " x " + number + " = " + result;

        const paragraph = document.createElement('p');
        paragraph.textContent = line;

        container.appendChild(paragraph);
    }
}

function showTable() {
    const number = document.getElementById('tableNumber').value;

    if (!number || isNaN(number)) {
        alert('vul een geldig getal in.');
        return;
    }

    generateTable(Number(number));
}