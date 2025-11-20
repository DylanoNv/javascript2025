function sum() {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);

    const result = num1 + num2;

    document.getElementById("result").innerText = "resultaat: " + result;
}

function minus() {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);

    const result = num1 - num2;

    document.getElementById("result").innerText = "resultaat: " + result;
}

function multiply() {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);

    const result = num1 * num2;

    document.getElementById("result").innerText = "resultaat: " + result;
}

function divide() {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);

    const result = num1 / num2;

    document.getElementById("result").innerText = "resultaat: " + result;
}