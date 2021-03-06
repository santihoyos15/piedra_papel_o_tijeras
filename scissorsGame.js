function scissorsGame(usrAction){
    const actions = ["piedra", "papel", "tijeras"];

    let randomNum = Math.floor(Math.random() * actions.length); //Chooses a random element of actions
    let pcAction = actions[randomNum]; 

    paragraph.innerHTML = `El computador elige ${pcAction}. <br>`
    console.log(usrAction);
    
    if (usrAction === pcAction){
        return "Empate";
    }
    //User Wins 
    else if(usrAction === actions[0] && pcAction === actions[2] || //Chooses rock
            usrAction === actions[1] && pcAction === actions[0] || //Chooses paper
            usrAction === actions[2] && pcAction === actions[1])   //Chooses scissors
        {
        return "Ganaste!";
    }

    //PC Wins
    else {
        return "Computador gana";
    }
}
