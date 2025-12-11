let position = 0;
let movingright = true;
const box = document.getElementById('movingbox')

function move() {
    if (movingright) {
        position += 5;
        if (position >= window.innerWidth - 50) {
            movingright = false;

        }
    } else {
        position -= 5;
        if (position <= 0) {
            movingright = true;
        }
    }

    box.style.left = position + 'px';
}

setInterval(move, 100);