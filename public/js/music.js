

export function createAudioTag(){
    const gameWindow = document.getElementById(("gameWindow"))

    let source = "./assets/sound/penguinmusic-modern-chillout-12641.mp3"

    let audioTag = document.createElement('audio');
    audioTag.src = source;
    audioTag.setAttribute("preload", "auto");
    audioTag.setAttribute("controls", "none");
    audioTag.style.display = "none";
    gameWindow.appendChild(audioTag);
    audioTag.play()

    // function sound(source) {
    //     this.sound = document.createElement("audio");
    //     this.sound.src = source;
    //     this.sound.setAttribute("preload", "auto");
    //     this.sound.setAttribute("controls", "none");
    //     this.sound.style.display = "none";
    //     gameWindow.appendChild(this.sound);
    //     this.play = function(){
    //     this.sound.play();
    //     }
    //     this.stop = function(){
    //     this.sound.pause();
    //     }
    // }
    // sound(source);
}

