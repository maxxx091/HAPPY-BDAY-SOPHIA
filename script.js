document.addEventListener("DOMContentLoaded", () => {
  const card = document.getElementById("birthdayCard");
  const audio = document.getElementById("birthdayAudio");

  card.addEventListener("mouseenter", () => {
    audio.currentTime = 0;
    audio.play();
  });
});
