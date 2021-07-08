let result;

//Rock button
let rock = document.getElementById("rock");
rock.addEventListener("click", () => {
    result = scissorsGame("rock"); //receives one of these parameters: "rock", "paper", "scissors"
    console.log(result);
});

//Paper button
let paper = document.getElementById("paper");
paper.addEventListener("click", () => {
    result = scissorsGame("paper"); //receives one of these parameters: "rock", "paper", "scissors"
    console.log(result);
});

//Scissors button
let scissors = document.getElementById("scissors");
scissors.addEventListener("click", () => {
    result = scissorsGame("scissors"); //receives one of these parameters: "rock", "paper", "scissors"
    console.log(result);
});

