import Note from "./Note.js";
import { notes } from "./game.js"
import { playMissedNote } from "./music.js"

export let score = 0;
const scoreText = document.getElementById("scoreTextGame");
const greenBtn = document.getElementById("greenBtn");
const redBtn = document.getElementById("redBtn");
const yellowBtn = document.getElementById("yellowBtn");
const blueBtn = document.getElementById("blueBtn");


document.addEventListener("keydown", (event => {
    let keyPressed = event.key;

    if(keyPressed == 1){
        greenBtn.setAttribute('class', 'btnPressed')
        checkNoteHit(keyPressed)
    }
    else if(keyPressed == 2){
        redBtn.setAttribute('class', 'btnPressed')
        checkNoteHit(keyPressed)
    }
    else if(keyPressed == 3){
        yellowBtn.setAttribute('class', 'btnPressed')
        checkNoteHit(keyPressed)
    }
    else if(keyPressed == 4){
        blueBtn.setAttribute('class', 'btnPressed')
        checkNoteHit(keyPressed)
    }
    else {
        return;
    }
}));


document.addEventListener("keyup", (event => {
    let keyup = event.key;
    
    if(keyup == 1){
        greenBtn.classList.remove("btnPressed");
    }
    else if(keyup == 2){
        redBtn.classList.remove("btnPressed");
    }
    else if(keyup == 3){
        yellowBtn.classList.remove("btnPressed");
    }
    else if(keyup == 4){
        blueBtn.classList.remove("btnPressed");
    }
    else {
        return;
    }
}));


function checkNoteHit(keyPressed){

    let lastNote_y = notes[0].note_y;
    let lastNote_color = notes[0].color;

    if (lastNote_y < 800 && lastNote_y > 675){
        if (
            lastNote_color == 'green' && keyPressed == 1 ||
            lastNote_color == 'red' && keyPressed == 2 || 
            lastNote_color == 'yellow' && keyPressed == 3 ||
            lastNote_color == 'blue' && keyPressed == 4
            )
        {
            score = score + 10;
            notes[0].testHit(true);
            updateScore(score)
        } else {
            score = score - 20;
            updateScore(score);
            playMissedNote();
        }  
    }
    else{
        score = score - 20;
        updateScore(score);
        playMissedNote();
    }
}

export function updateScore(score){
    localStorage.setItem("score", score);
    scoreText.textContent = 'Score: ' + score;
}

