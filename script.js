const dot = document.getElementById("dot");
const scoreSpan = document.getElementById("score");
const startBtn = document.getElementById("start-btn");
const gameArea = document.getElementById("game-area");

let score = 0;
let interval;

function moveDot() {
    const maxX = gameArea.clientWidth - 30;
    const maxY = gameArea.clientHeight - 30;

    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);

    dot.style.left = x + "px";
    dot.style.top = y + "px";
}

dot.addEventListener("click", () => {
    score++;
    scoreSpan.textContent = score;
});

startBtn.addEventListener("click", () => {
    score = 0;
    scoreSpan.textContent = score;
    clearInterval(interval);
    interval = setInterval(moveDot, 800); // точка меняет позицию каждые 0.8 сек
});
