import { ctx, canvasHeight, notes } from "./game.js";
import { updateScore} from "./buttonHandler.js";

class Note {
    constructor(hit, note_x, note_y, color){
        this.hit = hit;
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
            this.testHit();
        }
    }
    testHit(){
        
        if(this.hit == true){
            console.log("hit");
            notes.shift();
            return;
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