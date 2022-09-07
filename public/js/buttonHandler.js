import { notes } from "./script.js"

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

    let lastNote = notes[notes.length -1]

    if (lastNote > 800 && lastNote < 600){
        console.log('hit');
    }
    else{
        console.log('miss');
    }

}


createBtns();