const canvas = document.getElementById("canvas");
const gameWindow = document.getElementById(("gameWindow"))
const ctx = canvas.getContext("2d");

const canvasWidth = canvas.width = 525;
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

const NoteSpawninterval = setInterval(function() {
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