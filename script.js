let playerScore = 0, computerScore = 0;
            let roundWin = false, gameWin = false, tie = false;

          
            const rockButton = document.getElementById("Rock");
            const paperButton = document.getElementById("Paper");
            const scissorsButton = document.getElementById("Scissors");

            const scoreContainer = document.querySelector("#score");
            const resultContainer = document.querySelector("#results");
            const resetContainer = document.querySelector("#reset");
            const playerChoiceContainer = document.querySelector(".player");
            const compChoiceContainer = document.querySelector(".computer");

            const header = document.createElement("h2");
            header.classList.add("header");
            header.textContent = "Score";
            scoreContainer.appendChild(header);

            const score = document.createElement("p");
            score.classList.add("score");
            score.textContent = playerScore + " -  " + computerScore;
            scoreContainer.appendChild(score);

            const message = document.createElement("p");
            message.classList.add("message");
            message.textContent = "First to 5 Wins!";
            resultContainer.appendChild(message);

            const playerChoice = document.createElement("p");
            const compChoice = document.createElement("p");
            playerChoice.classList.add("playerChoice");
            compChoice.classList.add("compChoice");
            playerChoice.textContent = "Player";
            compChoice.textContent = "Computer";
            playerChoiceContainer.appendChild(playerChoice);
            compChoiceContainer.appendChild(compChoice);
            
            const resetButton = document.createElement("button");
            resetButton.classList.add("resetButton");
            resetButton.textContent = "Reset";
            resetContainer.appendChild(resetButton);


            rockButton.addEventListener("click", function() {
                if(!gameWin){
                roundWin = false;
                tie = false;
                const computerSelection = computerPlay();
                const playerSelection = this.id;
                playRound(playerSelection, computerSelection);
                }

            });

            paperButton.addEventListener("click", function() {
                if(!gameWin){
                roundWin = false;
                tie = false;
                const computerSelection = computerPlay();
                const playerSelection = this.id;
                playRound(playerSelection, computerSelection);
                }
            });

            scissorsButton.addEventListener("click", function() {
                if(!gameWin){
                roundWin = false;
                tie = false;
                const computerSelection = computerPlay();
                const playerSelection = this.id;
                playRound(playerSelection, computerSelection);
                }
                
            });

            resetButton.addEventListener("click", function(){
                tie = false;
                roundWin = false;
                gameWin = false;
                playerScore = 0, computerScore = 0;
                score.textContent = playerScore + " -  " + computerScore;
                message.textContent = "First to 5 Wins!";
                playerChoice.textContent = "Player";
                compChoice.textContent = "Computer";

            });
            
            /*
            for(let i=0; i<buttons.length; i++){
                buttons[i].addEventListener("click", function(e){
                    if(playerScore < 5 && computerScore < 5){
                    const computerSelection = computerPlay();
                    const playerSelection = buttons[i].textContent.toLowerCase();
                    roundWin = false;
                    tie = false;
                    playRound(playerSelection, computerSelection);
                    }
                    
                });
            }
            */


            function playRound(playerSelection, computerSelection){
                playerChoice.textContent = playerSelection;
                compChoice.textContent = computerSelection;
                let resultMessage = getResult(playerSelection, computerSelection);
                if(!tie){
                    if(roundWin) playerScore++;
                    else computerScore ++;
                }

                let scoreMessage = playerScore + " - " + computerScore; 
                console.log(resultMessage + " " + scoreMessage);
                displayMessage(resultMessage);
                displayScore(scoreMessage);
                
                let finalMessage = "";
                if(playerScore >= 5 || computerScore >= 5){
                    gameWin = true;
                    if(playerScore > computerScore) finalMessage = "You beat the Computer! ";
                    else finalMessage = "You lost to the Computer! Better luck next time."
                    console.log(finalMessage);
                    displayMessage(finalMessage);   
                }

            }

            function getResult(playerSelection, computerSelection){
                let result = "";
                let player = playerSelection.toLowerCase();
                let computer = computerSelection.toLowerCase();
                if(player == computer){
                    result = "It's a Tie! You both chose " + capitalizeFirstLetter(player);
                    tie = true;
                } 
                else{
                    if (player == "rock" && computer == "scissors" 
                    || player == "paper" && computer == "rock"
                    || player == "scissors" && computer == "paper"){
                        result = "You Win! " + capitalizeFirstLetter(player) + " beats " + capitalizeFirstLetter(computer);
                        roundWin = true;
                    }
                    else result = "You Lose! " + capitalizeFirstLetter(computer) + " beats " + capitalizeFirstLetter(player); 
                    
                }
                return result;
            }

            function capitalizeFirstLetter(string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            }

            function computerPlay(){
                const choices = ["Rock", "Paper", "Scissors"];
                let rand = Math.floor(Math.random()*3);    
                return choices[rand];
            }

            function displayScore(scoreMessage){
                score.textContent = scoreMessage;
            }

            function displayMessage(someMessage){
                message.textContent = someMessage;
            }