const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const canvasWidth = canvas.width = 600;
const canvasHeight = canvas.height = 800;

let notes = [];
let noteIndex = 0;

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
            ctx.fillStyle = '#228B22';
            ctx.fill();
        }
        else if (this.color == 'red'){
            ctx.fillStyle = '#ff0000';
            ctx.fill();
        }
        else if (this.color == 'yellow'){
            ctx.fillStyle = '#FFFF00';
            ctx.fill();
        }
        else{
            ctx.fillStyle = '#0000FF';
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
        const note = new Note(noteIndex, 100, 40, 'green');
        notes.push(note);
    }
    else if (randNote == 2){
        const note = new Note(noteIndex, 200, 40, 'red');
        notes.push(note);
    }
    else if (randNote == 3){
        const note = new Note(noteIndex, 300, 40, 'yellow');
        notes.push(note);
    }
    else {
        const note = new Note(noteIndex, 400, 40, 'blue');
        notes.push(note);
    }

}

const interval = setInterval(function() {
    createNewNote();
  }, 500);


function update(){
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)


    for (let i = 0; i < notes.length; i++){
        notes[i].drawNote();
    }


    requestAnimationFrame(update)
}


update();