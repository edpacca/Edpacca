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