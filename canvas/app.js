window.addEventListener("load", function () {
  // 1) canvas laden
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");

  // 2) fullscreen
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // 3) check of je aan het tekenen bent
  let painting = false;

  // 4) start tekenen 
  function startPosition(e) {
    painting = true;
    draw(e);
  }

  // 5) stop tekenen
  function finishedPosition() {
    painting = false;
    ctx.beginPath();
  }

  // 6) tekenen als je beweegt
  function draw(e) {
    if (!painting) return;

    ctx.lineWidth = 10;
    ctx.lineCap = "round";

    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();


    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
  }

  // 7) alles koppelen
  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("mouseup", finishedPosition);
  canvas.addEventListener("mousemove", draw);
});