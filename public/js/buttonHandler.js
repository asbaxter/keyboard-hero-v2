import { notes } from "./game.js"

const gameWindow = document.getElementById(("gameWindow"))

function createBtns(){
    const greenBtn = document.createElement('button');
    const redBtn = document.createElement('button');
    const yellowBtn = document.createElement('button');
    const blueBtn = document.createElement('button');

    greenBtn.setAttribute('id', 'greenBtn');
    redBtn.setAttribute('id', 'redBtn');
    yellowBtn.setAttribute('id', 'yellowBtn');
    blueBtn.setAttribute('id', 'blueBtn');

    gameWindow.appendChild(greenBtn);
    gameWindow.appendChild(redBtn);
    gameWindow.appendChild(yellowBtn);
    gameWindow.appendChild(blueBtn);

    btnPressHandler(greenBtn, redBtn, yellowBtn, blueBtn);
}

function btnPressHandler(greenBtn, redBtn, yellowBtn, blueBtn){

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
    }))
    
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
    }))
}

function checkNoteHit(keyPressed){


    let lastNote_y = notes[0].note_y
    let lastNote_color = notes[0].color

    if (lastNote_y < 800 && lastNote_y > 675){
        if (
            lastNote_color == 'green' && keyPressed == 1 ||
            lastNote_color == 'red' && keyPressed == 2 || 
            lastNote_color == 'yellow' && keyPressed == 3 ||
            lastNote_color == 'blue' && keyPressed == 4
            )
        {
            console.log("hit")
        } else {
            console.log('wrong note')
        }  
    }
    else{
        console.log('miss the hitbox');
        console.log(lastNote_y);
    }

}


createBtns();