let winkelmandje = ["Bananen", "Whiskey", "Chips", "Bonen", "Aardappelen"];

let aantalproducten = winkelmandje.length;
let tekst = "Er zitten " + aantalproducten + " producten in je mandje.";
document.getElementById("aantal").innerText = tekst;

let productenLijst = "";
for (let i = 0; i < winkelmandje.length; i++) {
    productenLijst += winkelmandje[i] + "<br>";
}
let tekstProducten = "Uw producten zijn:<br>" + productenLijst;
document.getElementById("producten").innerHTML = tekstProducten;

let vierdeProduct = winkelmandje[3];
let tekstVierdeProduct = vierdeProduct + ", staat op de vierde plek in uw winkelmand.";
document.getElementById("vierdeProduct").innerText = tekstVierdeProduct;

let nieuweWinkelmand = [...winkelmandje];
nieuweWinkelmand[1] = "Bier";
let tekstNieuweWinkelmand = "De nieuwe winkelmand is: " + nieuweWinkelmand.join(",");
document.getElementById("nieuweWinkelmand").innerText = tekstNieuweWinkelmand;

function addProduct() {
    winkelmandje.push("Melk");

    let nieuweLijst = winkelmandje.join(",");
    document.getElementById("aantal").innerText = "Nieuwe winkelmand: " + nieuweLijst;
}

document.getElementById("addProductButton").addEventListener("click", function() {
    addProduct();
    checkAantalProducten();
});

function checkAantalProducten() {
    if (winkelmandje.length > 1) {
        let productenLijst = winkelmandje.join(",");
        document.getElementById("producten").innerText = "Uw producten zijn: " + productenLijst;
    } else {
        document.getElementById("aantal").innerText = "U heeft niet genoeg producten om te tonen.";
    }
}

function checkOpDrop() {
    if (winkelmandje[4] === "drop") {
        let productenLijst = winkelmandje.join(",");
        document.getElementById("producten").innerText = "Uw producten zijn: " +  productenLijst;
    } else {
        document.getElementById("producten").innerText = "U heeft geen drop";
    }
}

document.getElementById("checkDropButton").addEventListener("click", checkOpDrop);

function toonProductenMetSpatie() {
    let productenMetSpatie = winkelmandje.join(" ");
    document.getElementById("producten").innerText = "Uw producten met spaties: " + productenMetSpatie;
}

document.getElementById("spatieButton").addEventListener("click", toonProductenMetSpatie);

function verwijderEersteTwee() {
    let oudeWinkelmand = winkelmandje.join(",");
    document.getElementById("producten").innerText = "Oude winkelmand: " + oudeWinkelmand;

    winkelmandje.splice(0, 2);

    let nieuweWinkelmand = winkelmandje.join(", ");
    document.getElementById("nieuweProducten").innerText = "Nieuwe winkelmand: " + nieuweWinkelmand;
}

document.getElementById("verwijderButton").addEventListener("click", verwijderEersteTwee);
