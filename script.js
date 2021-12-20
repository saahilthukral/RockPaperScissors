
//V1 of Rock Paper Scissors
function computerPlay() {
    let arrays = ["Rock", "Paper", "Scissors"]; //Create Array

    let option = arrays[Math.floor(Math.random()*arrays.length)];
    
    return option;
}

function rps(playerSelection, computerSelection){
    let counter1;
    let result;

    playerSelection = playerSelection.toLowerCase(); //This levels all the values to lowercase
    computerSelection = computerSelection.toLowerCase();

    if(playerSelection === computerSelection){
        console.log("It's a draw.");
        counter1 = -1;
    }
    else{
        if(playerSelection == "rock"){
            if(computerSelection == "paper"){
                console.log("Paper beats Rock, Computer Wins");
                counter1 = 1;
            }
            else{
                console.log("Rock beats Scissors, Player wins");
                counter1 = 0;
            }
        }

        else if(playerSelection == "paper"){
            if(computerSelection == "scissors"){
                console.log("Scissors beats Paper, computer wins");
                counter1 = 1;
            }
            else{
                console.log(result = "Paper beats Rock, Player wins");
                counter1 = 0;
        }
    }

    else{
        if(computerSelection == "rock"){
                console.log("Rock beats Scissors, computer wins");
                counter1 = 1;
            }
            else{
                console.log("Scissors beats Paper, Player wins");
                counter1 = 0;
    }
    }
    }
    console.log(counter1);

    return counter1;
}



// console.log(rps(playerSelectio, computerSelectio));


function game(){
    let counter1 = 0;
    let counter2 = 0;
    let counter3 = 0;
    let result, playerSelectio, computerSelectio;

    playerSelectio = prompt("Enter your choice: Rock, Paper, Scissors");
    computerSelectio = computerPlay();
    
    //Getting the number required and then adding it up to the counter 5 times (w/o loop)
    counter = rps(playerSelectio, computerSelectio);
    if(counter == 0){
        counter1 += 1;
    }
    else if(counter == 1){
            counter2 +=1;
        }
    else{
        counter3 += 1;
    }

    playerSelectio = prompt("Enter your choice: Rock, Paper, Scissors");
    computerSelectio = computerPlay();
    
    //Getting the number required and then adding it up to the counter 5 times (w/o loop)
    counter = rps(playerSelectio, computerSelectio);
    if(counter == 0){
        counter1 += 1;
    }
    else if(counter == 1){
            counter2 +=1;
        }
    else{
        counter3 += 1;
    }

    playerSelectio = prompt("Enter your choice: Rock, Paper, Scissors");
    computerSelectio = computerPlay();
    
    //Getting the number required and then adding it up to the counter 5 times (w/o loop)
    counter = rps(playerSelectio, computerSelectio);
    if(counter == 0){
        counter1 += 1;
    }
    else if(counter == 1){
            counter2 +=1;
        }
    else{ if(counter == -1){
        counter3 += 1;
    }
        
    }

    playerSelectio = prompt("Enter your choice: Rock, Paper, Scissors");
    computerSelectio = computerPlay();
    
    //Getting the number required and then adding it up to the counter 5 times (w/o loop)
    counter = rps(playerSelectio, computerSelectio);
    if(counter == 0){
        counter1 += 1;
    }
    else if(counter == 1){
            counter2 +=1;
        }
    else{ if(counter == -1){
        counter3 += 1;
    }
    }

    playerSelectio = prompt("Enter your choice: Rock, Paper, Scissors");
    computerSelectio = computerPlay();
    
    //Getting the number required and then adding it up to the counter 5 times (w/o loop)
    counter = rps(playerSelectio, computerSelectio);
    if(counter == 0){
        counter1 += 1;
    }
    else if(counter == 1){
            counter2 +=1;
        }
    else{ if(counter == -1){
        counter3 += 1;
    }
        
}
    console.log(counter1);
    console.log(counter2);
    console.log(counter3);
    if (counter1 > counter2){
        result = "Player wins";
    }
    else if (counter2 > counter1){
        result = "Computer wins";
    }
    else{ if(counter3 == 5){
        result = "It's a tie";
    }
        
    }

    return result;
    

}

console.log(game());
    
    
    
    