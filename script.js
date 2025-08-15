const card = document.getElementById("card");
const audio = document.getElementById("birthday-audio");

let hasPlayed = false;

card.addEventListener("mouseenter", () => {
    if (!hasPlayed) {
        audio.play();
        hasPlayed = true;
    }
});
