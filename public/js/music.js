export function createAudioTag(){
    const gameWindow = document.getElementById(("gameWindow"))

    let source = "./assets/sound/insurrection.mp3"

    let song = document.createElement('audio');
    song.onended = function(){
        window.location.replace("./score.html");
    }
    song.src = source;
    gameWindow.appendChild(song);
    song.play();
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