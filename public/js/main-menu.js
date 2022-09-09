const menu = document.querySelector('.menu');

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

        let track = document.createElement('audio');
        track.src = audioPath[0]
        menu.appendChild(track);
        track.play();

    }else if (songSelect == "Tuesday"){

        localStorage.setItem("song", audioPath[1]);

        let track = document.createElement('audio');
        track.src = audioPath[1]
        menu.appendChild(track);
        track.play();

    }else if (songSelect == "Metamorphosis"){

        localStorage.setItem("song", audioPath[2]);

        let track = document.createElement('audio');
        track.src = audioPath[2]
        menu.appendChild(track);
        track.play();

    }else if (songSelect == "Insurrection"){

        localStorage.setItem("song", audioPath[3]);

        let track = document.createElement('audio');
        track.src = audioPath[3]
        menu.appendChild(track);
        track.play();
        
    }else if (songSelect == "Cyberpunk 2099"){

        localStorage.setItem("song", audioPath[4]);

        let track = document.createElement('audio');
        track.src = audioPath[4]
        console.log(track.src)
        menu.appendChild(track);
        track.play();

    }else{

        return;
    }
}))