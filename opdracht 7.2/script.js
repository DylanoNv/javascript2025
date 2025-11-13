document.getElementById('geldForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const userInput = parseFloat(document.getElementById('geld').value);

    if (userInput > 60) {
        console.log("Je hebt genoeg geld");
    } else {
        console.log("Je hebt niet genoeg geld");
    }
});
