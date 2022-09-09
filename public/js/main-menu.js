const menu = document.querySelector('.menu');
const songOne = document.querySelector('#songOne');
const songTwo = document.querySelector('#songTwo');
const songThree = document.querySelector('#songThree');
const songFour = document.querySelector('#songFour');
const songFive = document.querySelector('#songFive');
let track = document.createElement('audio');

let audioPath = 
[
    "./assets/sound/penguinmusic-modern-chillout-12641.mp3",
    "./assets/sound/tuesday.mp3",
    "./assets/sound/metamorphosis.mp3",
    "./assets/sound/insurrection.mp3",
    "./assets/sound/cyberpunk-2099.mp3"
];

document.addEventListener("click", (event => {
    
    console.log(event.target)

    let songSelect = event.target.innerHTML;
    songOne.removeAttribute("id");
    songTwo.removeAttribute("id");
    songThree.removeAttribute("id");
    songFour.removeAttribute("id");
    songFive.removeAttribute("id");


    if (songSelect == "Penguin Music"){
        localStorage.setItem("song", audioPath[0]);
        songOne.setAttribute("id", "playing");
        track.src = audioPath[0]
        menu.appendChild(track);
        track.play();

    }else if (songSelect == "Tuesday"){

        localStorage.setItem("song", audioPath[1]);
        songTwo.setAttribute("id", "playing");
        track.src = audioPath[1]
        menu.appendChild(track);
        track.play();

    }else if (songSelect == "Metamorphosis"){

        localStorage.setItem("song", audioPath[2]);
        songThree.setAttribute("id", "playing");
        track.src = audioPath[2]
        menu.appendChild(track);
        track.play();

    }else if (songSelect == "Insurrection"){

        localStorage.setItem("song", audioPath[3]);
        songFour.setAttribute("id", "playing");
        track.src = audioPath[3]
        menu.appendChild(track);
        track.play();
        
    }else if (songSelect == "Cyberpunk 2099"){

        localStorage.setItem("song", audioPath[4]);
        songFive.setAttribute("id", "playing");
        track.src = audioPath[4]
        menu.appendChild(track);
        track.play();

    }else{

        return;
    }
}))