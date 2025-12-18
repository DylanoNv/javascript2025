function toon100Keer() {
    let tekst = "Dit is mijn tekst<br>";
    let herhaaldeTekst = "";

    for (let i = 0; i < 100; i++) {
        herhaaldeTekst += tekst;
    }

    document.getElementById("herhaaldeTekst").innerHTML = herhaaldeTekst;
}

document.getElementById("toonTekstButton").addEventListener("click", toon100Keer);