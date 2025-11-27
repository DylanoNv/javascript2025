const closedFaceEl = document.querySelector(".closed");
const openFaceEl = document.querySelector(".open");

function closedFace() {
  if (closedFaceEl.classList.contains("active")) {
    closedFaceEl.classList.remove("active");
    openFaceEl.classList.add("active");
  }
}

function openFace() {
  if (openFaceEl.classList.contains("active")) {
    openFaceEl.classList.remove("active");
    closedFaceEl.classList.add("active");
  }
}
