let movements = [];

document.addEventListener("mousemove", event => {
    movements.push({ x: event.clientX, y: event.clientY, time: Date.now() });
    if (movements.length > 50) movements.shift();
    analyzeMood();
});

function analyzeMood() {
    let speed = movements.length > 1 ? Math.abs(movements[movements.length - 1].x - movements[0].x) : 0;
    document.getElementById("mood").innerText = speed > 100 ? "Ви схвильовані!" : "Спокійний стан.";
}
