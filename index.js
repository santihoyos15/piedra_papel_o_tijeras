let result;
let paragraph = document.getElementById("result");

//Rock button
let rock = document.getElementById("rock");
rock.addEventListener("click", () => {
    result = scissorsGame("piedra"); //receives one of these parameters: "rock", "paper", "scissors"
    paragraph.innerHTML += result;
    console.log(result);
});

//Paper button
let paper = document.getElementById("paper");
paper.addEventListener("click", () => {
    result = scissorsGame("papel"); //receives one of these parameters: "rock", "paper", "scissors"
    paragraph.innerHTML += result;
    console.log(result);
});

//Scissors button
let scissors = document.getElementById("scissors");
scissors.addEventListener("tijeras", () => {
    result = scissorsGame("scissors"); //receives one of these parameters: "rock", "paper", "scissors"
    paragraph.innerHTML += result;
    console.log(result);
});