
const playButton = document.getElementById("playButton");
const playerStatus = document.getElementById("playerStatus");

let isPlaying = false;

playButton.addEventListener("click", () => {
  isPlaying = !isPlaying;

  playButton.textContent = isPlaying ? "Ⅱ" : "▶";

  playerStatus.textContent = isPlaying
    ? "La transmisión estará disponible próximamente."
    : "Próximamente: transmisión en vivo.";

  isPlaying = false;
  playButton.textContent = "▶";
});

