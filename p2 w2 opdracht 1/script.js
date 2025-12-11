let position = 0;
const box = document.getElementById('movingbox')

function moveRight() {
    position += 5;
    box.style.left = position + 'px';

    if (position > window.innerWidth - 50) {
        clearInterval(intervalId);
    }
}

const invervalId = setInterval(moveRight, 100);
    