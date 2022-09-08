function getScore(){

    const scoreText = document.getElementById("scoreText");
    let score = localStorage.getItem("score");

    scoreText.textContent = "Final Score: " + score;


}
getScore();