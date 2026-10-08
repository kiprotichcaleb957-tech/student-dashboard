const music =new Audio("music/romantic-song.mp3.mp3");

const musicButton = document.getElementById("musicButton");

let isPlaying = false;

musicButton.addEventListener("click", function() {

    if (isPlaying) {
        music.pause();
        musicButton.textContent = "Play Music";
        isPlaying = false;
    } else {
        music.play();
        musicButton.textContent = "Pause Music";
        isPlaying = true;
    }
});

const surpriseButton = document.getElementById("surpriseButton");
const surpriseMessage = document.getElementById("surpriseMessage");

const message = "No matter how many websites I build, this one will always be special because it's for you.❤️";

const typingMessage = document.getElementById("typingMessage");

let index = 0;

function typeMessage() {
    if (index< message.length) {
        typingMessage.textContent += message.charAt(index);
        index++;
        setTimeout(typeMessage, 50);
    }
}   

surpriseButton.addEventListener("click", function() {
    surpriseMessage.classList.add("show");
    surpriseButton.textContent = "❤️ Surprise unlocked! ❤️";

    typeMessage();

    setTimeout(function() {
        document.getElementById("finalScreen").classList,add("show");
    }, 5000);
});

const openButton = document.getElementById("openButton");
const welcomeScreen = document.getElementById("welcomeScreen");

openButton.addEventListener("click", function() {
    welcomeScreen.classList.add("hide");
});