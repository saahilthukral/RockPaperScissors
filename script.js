function computerPlay() {
    let arrays = ["Rock", "Paper", "Scissors"]; //Create Array

    let option = arrays[Math.floor(Math.random()*arrays.length)];
    
    return option;
}

function rps(playerSelection, computerSelection){
    let counter1 = 0;
    let counter2 = 0;
    let counter3 = 0;

    playerSelection = playerSelection.toLowerCase(); //This levels all the values to lowercase
    computerSelection = computerSelection.toLowerCase();

    if(playerSelection === computerSelection){
        result = "It's a draw.";
        counter3 += 1;
    }
    else{
        if(playerSelection == "rock"){
            if(computerSelection == "paper"){
                result = "Paper beats Rock, Computer Wins";
                counter1 += 1;
            }
            else{
                result = "Rock beats Scissors, Player wins";
                counter2 += 1;
            }
        }

        else if(playerSelection == "paper"){
            if(computerSelection == "scissors"){
                result = "Scissors beats Paper, computer wins";
                counter1 += 1;
            }
            else{result = "Paper beats Rock, Player wins"
                counter2 += 1;
        }
    }

    else if(playerSelection == "scissors"){
        if(computerSelection == "rock"){
                result = "Rock beats Scissors, computer wins";
                counter1 += 1;
            }
            else{
                result = "Scissors beats Paper, Player wins";
                counter2 += 1;
    }
}
    else{
        result = "Error, try again";
        console.log("Error, try again");
    }
    }

    return [result, counter1, counter2, counter3];
}

let counter1 = 0;
let counter2 = 0;
const div1 = document.querySelector('#container2');
const div3 = document.querySelector('#container3');
const div4 = document.querySelector('#container4');
const divs = document.createElement('div');
const divs2 = document.createElement('div');
const divs3 = document.createElement('div');
const divs4 = document.createElement('div');

const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let result = rps(button.id, computerPlay());
            counter1 += result[1];
            counter2 += result[2];
            divs.classList.add("divs");
            divs.style.backgroundColor = "#FFFFFF";
            divs2.style.backgroundColor = "rgb(230, 223, 199)";
            divs3.style.backgroundColor = "rgb(230, 223, 199)";
            divs4.style.backgroundColor = "#FFFFFF";
            divs.style.margin = "auto 2%";
            divs.style.padding = "1%";
            divs2.style.margin = "auto 2%";
            divs2.style.padding = "1%";
            divs3.style.padding = "1%";
            div3.style.margin = "auto 2%";
            div4.style.margin = "auto 2%";
            divs4.style.padding = "1%";


            divs.textContent = result[0];
            divs2.innerHTML = "Computer Score: " + counter1;
            divs3.textContent = "Player Score: " + counter2;
            if(counter1 == 5 || counter2 == 5){
                if(counter1 > counter2){
                    divs4.textContent = "Computer Wins, Better Luck next time :)";
                }
                else{
                    divs4.textContent = "You win!!! Congratulations";
                }
            }
        })
    })

div1.appendChild(divs);
div3.appendChild(divs2);
div3.appendChild(divs3);
div4.appendChild(divs4);