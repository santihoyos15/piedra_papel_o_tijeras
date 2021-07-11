let result;
let paragraph = document.getElementById("result");

//Rock button
let rock = document.getElementById("rock");
rock.addEventListener("click", () => {printResult("piedra")});

//Paper button
let paper = document.getElementById("paper");
paper.addEventListener("click", () => {printResult("papel")});

//Scissors button
let scissors = document.getElementById("scissors");
scissors.addEventListener("click", () => {printResult("tijeras")});

function printResult(action){
    result = scissorsGame(action); //receives one of these parameters: "rock", "paper", "scissors"
    paragraph.innerHTML += result;
    console.log(result);
}