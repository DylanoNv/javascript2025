
let budget = 100;
let product = 60;

let messageElement = document.getElementById("message");

if (budget >= product) {
    messageElement.textContent = "u heeft genoeg geld.";
    messageElement.style.color = "green";
} else {
    messageElement.textContent = "u heeft te weinig geld.";
    messageElement.style.color = "red";
}
