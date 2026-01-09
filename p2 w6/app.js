
// keuzes van de bot en speler
const botChoice = document.getElementById("bot-choice");
const playerChoice = document.getElementById("player-choice");
const resultOutput = document.getElementById("result");

const buttons = document.querySelectorAll("button");

let player = "";
let bot = "";  
let result = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        player = button.id;
        playerChoice.innerHTML = player;

        generateBotChoice();
        getResult();
    });
});

// generate random keuze voor bot
function generateBotChoice() {
    const random = Math.floor(Math.random() * 3);

    if (random === 0) bot = "rock";
    if (random === 1) bot = "paper";
    if (random === 2) bot = "scissors";
    
    botChoice.innerHTML = bot;
}

// bepaal resultaat
function getResult() {
    if (bot === player) {
        result = "Gelijkspel";
    } else if (
        player === "rock" && bot === "scissors" ||
        player === "paper" && bot === "rock" ||
        player === "scissors" && bot === "paper"
    ) {
        result = "Je hebt gewonnen";
    } else {
        result = "Je hebt verloren";
    }

    resultOutput.innerHTML = result;
}