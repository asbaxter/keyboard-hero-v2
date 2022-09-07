const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const canvasWidth = canvas.width = 600;
const canvasHeight = canvas.height = 600;

let notes = [];

class Note {
    constructor(id, note_x, note_y){
        this.id = id;
        this.note_x = note_x;
        this.note_y = note_y;
    }
    drawNote(){

        ctx.beginPath();
        ctx.arc(this.note_x, this.note_y, 50, 0, 2 * Math.PI);
        ctx.stroke();
        this.moveNote();
    }
    moveNote(){

        this.note_y = this.note_y + 10;
        console.log(this.note_y);
    }
}

function createNewNote(){

    const note = new Note(1, 75, 40);
    notes.push(note);

}

const interval = setInterval(function() {
    createNewNote();
  }, 2000);


function update(){
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)


    for (let i = 0; i < notes.length; i++){
        notes[i].drawNote();
    }


    requestAnimationFrame(update)
}


update();