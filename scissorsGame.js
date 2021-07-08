function scissorsGame(usrAction){
    const actions = ["piedra", "papel", "tijeras"];

    let randomNum = Math.floor(Math.random() * actions.length); //Chooses a random element of actions
    let pcAction = actions[randomNum]; 
    paragraph.innerHTML = `El computador elige ${pcAction}. <br>`
    
    if (usrAction === pcAction){
        return "Empate";
    }
    //User Wins 
    else if(usrAction === actions[0] && pcAction === actions[2] ||
            usrAction === actions[1] && pcAction === actions[0] ||
            usrAction === actions[2] && pcAction === actions[1])
        {
        return "Ganaste!";
    }

    //PC Wins
    else {
        return "Computador gana";
    }
}
