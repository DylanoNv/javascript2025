
if (!localStorage.getItem("cookiesAccepted")) {

    document.getElementById("cookie-wall").style.display = "flex";
}

document.getElementById("accept-cookies").addEventListener("click", function() {

    document.getElementById("cookie-wall").style.display = "none";
    localStorage.setItem("cookiesAccepted", "true");
});
