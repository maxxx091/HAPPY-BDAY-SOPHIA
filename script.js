const card = document.querySelector('.card');
const audio = document.getElementById('birthday-audio');

let isPlaying = false;

card.addEventListener('mouseenter', () => {
  if (!isPlaying) {
    audio.play();
    isPlaying = true;
  }
});
