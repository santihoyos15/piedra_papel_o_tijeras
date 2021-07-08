function scissorsGame(usrAction){
    const actions = ["piedra", "papel", "tijeras"];

    let randomNum = Math.floor(Math.random() * actions.length); //Chooses a random element of actions
    let pcAction = actions[randomNum]; 
    paragraph.innerHTML = `El computador elige ${pcAction}. <br>`
    
    //User chooses Rock
    if (usrAction === actions[0] && pcAction === actions[0]){
        return "Empate";
    } else if (usrAction === actions[0] && pcAction === actions[1]){
        return "Computador gana";
    }else if (usrAction === actions[0] && pcAction === actions[2]){
        return "Ganaste!";
    }

    //User chooses Paper
    if (usrAction === actions[1] && pcAction === actions[0]){
        return "Ganaste!";
    } else if (usrAction === actions[1] && pcAction === actions[1]){
        return "Empate";
    }else if (usrAction === actions[1] && pcAction === actions[2]){
        return "Computador gana";
    }

    //User chooses Scissors
    if (usrAction === actions[2] && pcAction === actions[0]){
        return "Computador gana";
    } else if (usrAction === actions[2] && pcAction === actions[1]){
        return "Ganaste!";
    }else if (usrAction === actions[2] && pcAction === actions[2]){
        return "Empate";
    }
}