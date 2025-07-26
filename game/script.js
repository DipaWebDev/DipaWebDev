const player = document.getElementById("player");
let x = 0, y = 0;
const step = 10;

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      if (y > 0) y -= step;
      break;
    case "ArrowDown":
      if (y < 290) y += step;
      break;
    case "ArrowLeft":
      if (x > 0) x -= step;
      break;
    case "ArrowRight":
      if (x < 290) x += step;
      break;
  }
  player.style.top = y + "px";
  player.style.left = x + "px";
});
