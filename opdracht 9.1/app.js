const openBtn = document.getElementById("openBtn");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const verifyBtn = document.getElementById("verifyBtn");
const ageInput = document.getElementById("ageInput");

openBtn.onclick = () => {
  modal.classList.add("visible");
  overlay.classList.add("visible");
};

verifyBtn.onclick = () => {
  const age = Number(ageInput.value);

  if (age > 18) {
    window.location.href = "https://techniekcollegerotterdam.nl";
  } else {
    document.body.style.background = "red";
    document.body.innerHTML = "<h1 style='color:white;text-align:center;margin-top:100px;'>Je bent te jong</h1>";
  }
};
