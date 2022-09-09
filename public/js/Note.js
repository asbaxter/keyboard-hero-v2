import { ctx, canvasHeight, notes } from "./game.js";
import { updateScore} from "./buttonHandler.js";

class Note {
    constructor(note_x, note_y, color){
        this.note_x = note_x;
        this.note_y = note_y;
        this.color = color;
    }
    drawNote(){

        ctx.beginPath();
        ctx.arc(this.note_x, this.note_y, 45, 0, 2 * Math.PI);

        if (this.color == 'green'){
            ctx.fillStyle = "rgba(0, 128, 0, 0.6)";
            ctx.fill();
        }
        else if (this.color == 'red'){
            ctx.fillStyle = "rgba(255, 0, 0, 0.6)";
            ctx.fill();
        }
        else if (this.color == 'yellow'){
            ctx.fillStyle = "rgba(255, 255, 0, 0.6)";
            ctx.fill();
        }
        else{
            ctx.fillStyle = "rgba(0, 0, 255, 0.6)";
            ctx.fill();

        }
        ctx.shadowBlur = 20;
        ctx.shadowColor = "white";
        ctx.stroke();
        this.moveNote();
    }
    moveNote(){
        this.note_y = this.note_y + 10;

        if (this.note_y > canvasHeight){
        // removes note object from array
            this.testHit();
        }
    }
    testHit(hit){
        
        if(hit == true){
            notes.shift();
        }
        else{
            let score = localStorage.getItem("score");
            notes.shift();
            score = score - 20;
            updateScore(score);
        }
    }
}

export default Note;