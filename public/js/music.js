export function createAudioTag(){
    const gameWindow = document.getElementById(("gameWindow"))
    let song = localStorage.getItem("song");
    
    let source = song;

    let songEl = document.createElement('audio');
    songEl.onended = function(){
        window.location.replace("./score.html");
    }
    songEl.src = source;
    gameWindow.appendChild(songEl);
    songEl.play();
}

export function playMissedNote(){
    let missedNote = document.createElement('audio');
    missedNote.src = "./assets/sound/missed-note.mp3"
    gameWindow.appendChild(missedNote);
    missedNote.play();

    setTimeout(() => {
        missedNote.remove();
    }, 1000);

}