const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


const canvasWidth = canvas.width = 600;
const canvasHeight = canvas.height = 600;

export class Note {
    constructor(id, note_x, note_y){
        this.id = id;
        this.note_x = note_x;
        this.ntoe_y = note_y;
    }
    drawNote(){
        ctx.beginPath();
        ctx.arc(100, 75, 50, 0, 2 * Math.PI);
        ctx.stroke();

    }
}

function createNewNote(){

    const note = new Note();
    note.drawNote();
}

function update(){
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)


    createNewNote();

    requestAnimationFrame(update)
}


update();