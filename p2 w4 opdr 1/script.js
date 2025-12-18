const container = document.getElementById('output');

for (let i = 1; i <= 10; i++) {
    const result = i * 10;

    const line = i + " x 10 = " + result;

    const paragraph = document.createElement('p');

    paragraph.textContent = line;

    container.appendChild(paragraph);
}