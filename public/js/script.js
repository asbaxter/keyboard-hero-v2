const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const canvasWidth = canvas.width = 525;
const canvasHeight = canvas.height = 800;

let notes = [];
let noteIndex = 0;

document.addEventListener("keydown", (event => {
    let keyPressed = event.key;

    if(keyPressed == 1){
        console.log("button 1")
    }
    else if(keyPressed == 2){
        console.log("button 2")
    }
    else if(keyPressed == 3){
        console.log("button 3")
    }
    else if(keyPressed == 4){
        console.log("button 4")
    }
    else {
        return;
    }
}))

document.addEventListener("keyup", (event => {
    console.log('button up')
}))


class Note {
    constructor(id, note_x, note_y, color){
        this.id = id;
        this.note_x = note_x;
        this.note_y = note_y;
        this.color = color;
    }
    drawNote(){

        ctx.beginPath();
        ctx.arc(this.note_x, this.note_y, 50, 0, 2 * Math.PI);

        if (this.color == 'green'){
            ctx.fillStyle = '#90EE90';
            ctx.fill();
        }
        else if (this.color == 'red'){
            ctx.fillStyle = '#ffcccb';
            ctx.fill();
        }
        else if (this.color == 'yellow'){
            ctx.fillStyle = '#ffffe0';
            ctx.fill();
        }
        else{
            ctx.fillStyle = '#ADD8E6';
            ctx.fill();
        }
        
        ctx.stroke();
        this.moveNote();
    }
    moveNote(){
        this.note_y = this.note_y + 10;

        if (this.note_y > canvasHeight){
        // removes note object from array
            notes.shift();
        }
    }
}

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

const interval = setInterval(function() {
    createNewNote();
  }, 500);


function drawButtons(){

    let lanePosition = 75;
    let buttonColors = ['#228B22', '#ff0000', '#FFFF00', '#0000FF']

    for (let i = 0; i < 4; i++){

        ctx.beginPath();
        ctx.arc(lanePosition, 725, 50, 0, 2 * Math.PI);
        ctx.fillStyle = buttonColors[i];
        ctx.fill();
        ctx.stroke();
        lanePosition = lanePosition + 125;
    }
}




function update(){
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)

    drawButtons();

    for (let i = 0; i < notes.length; i++){
        notes[i].drawNote();
    }


    requestAnimationFrame(update)
}


update();