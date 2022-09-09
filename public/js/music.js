import { setSongBPM } from "./game.js";

export function createAudioTag(){
    const gameWindow = document.getElementById(("gameWindow"))
    let song = localStorage.getItem("song");
    let songEl = document.createElement('audio');

    songEl.onended = function(){
        window.location.replace("./score.html");
    }
    songEl.src = song;
    gameWindow.appendChild(songEl);
    songEl.play();
}

export function playMissedNote(){
    let missedNote = document.createElement('audio');
    missedNote.src = "./public/assets/sound/missed-note.mp3"
    gameWindow.appendChild(missedNote);
    missedNote.play();

    setTimeout(() => {
        missedNote.remove();
    }, 1000);

}

export function songBPMHandler(){
    let song = localStorage.getItem("song");
    console.log(song);

    if (song == "./public/assets/sound/penguinmusic-modern-chillout-12641.mp3"){

        let BPM = 465;
        setSongBPM(BPM);

    }else if (song == "./public/assets/sound/tuesday.mp3"){

        let BPM = 606;
        setSongBPM(BPM);

    }else if (song == "./public/assets/sound/metamorphosis.mp3"){

        let BPM = 535;
        setSongBPM(BPM);

    }else if (song == "./public/assets/sound/insurrection.mp3"){

        let BPM = 303;
        setSongBPM(BPM);
        
    }else if (song == "./public/assets/sound/cyberpunk-2099.mp3"){

        let BPM = 327;
        setSongBPM(BPM);

    }else{

        return;
    }
}