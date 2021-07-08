const actions = ["rock", "paper", "scissors"];

let result = scissorsGame("rock");
console.log(result);

function scissorsGame(usrAction){
    let randomNum = Math.floor(Math.random() * actions.length); //Chooses a random element of actions
    let pcAction = actions[randomNum]; 
    console.log(randomNum);
    
    //User chooses Rock
    if (usrAction === actions[0] && pcAction === actions[0]){
        return "Draw";
    } else if (usrAction === actions[0] && pcAction === actions[1]){
        return "PC Wins";
    }else if (usrAction === actions[0] && pcAction === actions[2]){
        return "User Wins";
    }

    //User chooses Paper
    if (usrAction === actions[1] && pcAction === actions[0]){
        return "User Wins";
    } else if (usrAction === actions[1] && pcAction === actions[1]){
        return "Draw";
    }else if (usrAction === actions[1] && pcAction === actions[2]){
        return "PC Wins";
    }

    //User chooses Scissors
    if (usrAction === actions[2] && pcAction === actions[0]){
        return "PC Wins";
    } else if (usrAction === actions[2] && pcAction === actions[1]){
        return "User Wins";
    }else if (usrAction === actions[2] && pcAction === actions[2]){
        return "Draw";
    }
}