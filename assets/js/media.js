var music = new Audio();

function playMusic(file) {
    music.pause();
    music = new Audio(file);
    music.play();
}

function pauseMusic() {
    music.pause();
    music = new Audio();
    music.play();
}

function hideVideo(file) {
    var video = file;
    video.style.display='none';
}

function playVideo() {
    var video = document.getElementById("portal");
    video.currentTime = 0;
    video.style.display='initial';
    video.playVideo;
}