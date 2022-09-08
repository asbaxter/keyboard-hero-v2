import Note from "./Note.js";
import { createAudioTag } from "./music.js"

const canvas = document.getElementById("canvas");
export const ctx = canvas.getContext("2d");

const canvasWidth = canvas.width = 525;
export const canvasHeight = canvas.height = 800;

export let notes = [];
let noteIndex = 0;


function createNewNote(){
    // tracks note ID (IDK if I even need this yet)
    noteIndex++;

    let randNote = Math.floor(Math.random() * 4) + 1;

    if (randNote == 1){
        const note = new Note(noteIndex, 75, 40, 'green');
        notes.push(note);
    }
    else if (randNote == 2){
        const note = new Note(noteIndex, 200, 40, 'red');
        notes.push(note);
    }
    else if (randNote == 3){
        const note = new Note(noteIndex, 325, 40, 'yellow');
        notes.push(note);
    }
    else {
        const note = new Note(noteIndex, 450, 40, 'blue');
        notes.push(note);
    }

}

const NoteSpawninterval = setInterval(function() {
    createNewNote();
  }, 500);

// main animation frame where game is executing
function update(){
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)

    for (let i = 0; i < notes.length; i++){
        notes[i].drawNote();
    }


    requestAnimationFrame(update)
}

createAudioTag();
update();


