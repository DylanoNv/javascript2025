let veranderd = false;

function kleur_aanpassen() {
    const titel = document.getElementById("titel");

    if (!veranderd) {
        titel.style.color = "red";
        titel.innerText = "kleur is aangepast";
        veranderd = true;
} else {
    titel.style.color = "black";
    titel.innerText = "javascript opdracht 6.3";
    veranderd = false;
 }
}