import Note from "./Note.js";
import { createAudioTag } from "./music.js"

const canvas = document.getElementById("canvas");
const gameWindow = document.getElementById("gameWindow");

export const ctx = canvas.getContext("2d");
export let notes = [];
export const canvasHeight = canvas.height = 800;
const canvasWidth = canvas.width = 525;


function createNewNote(){

    let randNote = Math.floor(Math.random() * 4) + 1;

    if (randNote == 1){
        const note = new Note(false, 75, 40, 'green');
        notes.push(note);
    }
    else if (randNote == 2){
        const note = new Note(false, 200, 40, 'red');
        notes.push(note);
    }
    else if (randNote == 3){
        const note = new Note(false, 325, 40, 'yellow');
        notes.push(note);
    }
    else {
        const note = new Note(false, 450, 40, 'blue');
        notes.push(note);
    }

}

const NoteSpawninterval = setInterval(function() {
    createNewNote();
  }, 300);
  

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


