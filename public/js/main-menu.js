let audioPath = 
[
    "./assets/sound/penguinmusic-modern-chillout-12641.mp3",
    "./assets/sound/tuesday.mp3",
    "./assets/sound/metamorphosis.mp3",
    "./assets/sound/insurrection.mp3",
    "./assets/sound/cyberpunk-2099.mp3"
];


document.addEventListener("click", (event => {
    let songSelect = event.target.innerHTML;

    if (songSelect == "Penguin Music"){
        localStorage.setItem("song", audioPath[0]);
    }else if (songSelect == "Tuesday"){
        localStorage.setItem("song", audioPath[1]);
    }else if (songSelect == "Metamorphosis"){
        localStorage.setItem("song", audioPath[2]);
    }else if (songSelect == "Insurrection"){
        localStorage.setItem("song", audioPath[3]);
    }else if (songSelect == "Cyberpunk 2099"){
        localStorage.setItem("song", audioPath[4]);
    }else{
        return;
    }
}))