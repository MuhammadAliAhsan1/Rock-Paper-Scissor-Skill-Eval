let rock = document.getElementById("rockButton");
let paper = document.getElementById("paperButton");
let scissor = document.getElementById("scissorButton");
let userScoreSpan = document.getElementById("userScore");
let computerScoreSpan = document.getElementById("computerScore");
let elementDiv = document.getElementById("elementDiv");
let scoreText = document.getElementById("scoreText");
let ucScore = document.getElementById("ucScore");
let gameOverDiv = document.getElementById("gameOver");

let result = document.getElementById("result");
let restartButton = document.getElementById("restartButton");
let finalResult = document.getElementById("finalResult");
let elementButtons = document.querySelectorAll(".elementButtons");

let transitionDiv = document.getElementById("transition")
let transitionButton = document.getElementById("transitionButton")
let transitionText = document.getElementById("transitionText")

let instructionHeader = document.getElementById("instructionHeader");
let instructionDiv = document.getElementById("instructions");
let instructionText = document.getElementById("instructionText")
let beginButton = document.getElementById("beginButton");

/* initiating necessary variables */

let userScores = ["Placeholder", 0, 0, 0];
let computerScores = ["Placeholder", 0, 0, 0];
let decision = "";
let userSelectedChoice = ["Placeholder Value To Correct Future Index"];
let computerSelectedChoice = ["Placeholder Value To Correct Future Index"];
let randomComputerChoiceNumber;
let i = 0;
let iForScores = 1;
let currentGameNum = 1;
let attempts = 0;

/* making the game elements disappear because the user hasn't clicked the begin button yet */

gameOverDiv.style.display = "none";
transitionDiv.style.display = "none";
elementDiv.style.display = "none";
result.style.display = "none";
ucScore.style.display = "none";
scoreText.style.display = "none";

/* once the begin button is clicked, the elements appear */

beginButton.onclick = () => {
    instructionDiv.style.display = "none";
    elementDiv.style.display = "flex";
    result.style.display = "block";
    ucScore.style.display = "block";
    scoreText.style.display = "flex";
}

/* Once a button is clicked, the corresponding value is pushed into the userSelectedChoice list, the index counter is incremented, a computer choice is generated, and the winnerOrLoser() function is called */

elementButtons.forEach(element => {
    element.onclick = () => {
        userSelectedChoice.push(element.value);
        i++;
        randomComputerChoice();
        winnerOrLoser(userSelectedChoice, computerSelectedChoice);
    }
});

/* Computer's choice is generated */

function randomComputerChoice () {
    randomComputerChoiceNumber = Math.ceil(Math.random() * 3);
    switch(randomComputerChoiceNumber) {
        case 1: computerSelectedChoice.push("Rock"); break;
        case 2: computerSelectedChoice.push("Paper"); break;
        case 3: computerSelectedChoice.push("Scissor"); break;
    }
}

/* the user's and computer's choices are evaluated to determine who won and the scores are outputted*/

function winnerOrLoser (userChoice, computerChoice) {

    if(computerScores[iForScores] < 5 && userScores[iForScores] < 5) {
        if(userChoice[i] == computerChoice[i]) {
            decision = "draw";
            result.innerText = `${userChoice[i]} equals ${computerChoice[i]}. It's a draw!`;
        } 
        else if (userChoice[i] == "Rock" && computerChoice[i] == "Scissor") {
            result.innerText = `${userChoice[i]} smashes ${computerChoice[i]}. You win!`;
            userScores[iForScores]++;
            decision = "correct";
        }
        else if (userChoice[i] == "Scissor" && computerChoice[i] == "Paper") {
            result.innerText = `${userChoice[i]} cuts ${computerChoice[i]}. You win!`;
            userScores[iForScores]++;
            decision = "correct";
        }
        else if (userChoice[i] == "Paper" && computerChoice[i] == "Rock") {
            result.innerText = `${userChoice[i]} covers ${computerChoice[i]}. You win!`;
            userScores[iForScores]++;
            decision = "correct";
        }
        else if (userChoice[i] == "Scissor" && computerChoice[i] == "Rock") {
            result.innerText = `${computerChoice[i]} smashes ${userChoice[i]}. You lose :(`;
            computerScores[iForScores]++;
            decision = "incorrect";
        }
        else if (userChoice[i] == "Paper" && computerChoice[i] == "Scissor") {
            result.innerText = `${computerChoice[i]} cuts ${userChoice[i]}. You lose :(`;
            computerScores[iForScores]++;
            decision = "incorrect";
        }
        else if (userChoice[i] == "Rock" && computerChoice[i] == "Paper") {
            result.innerText = `${computerChoice[i]} covers ${userChoice[i]}. You lose :(`;
            computerScores[iForScores]++;
            decision = "incorrect";
        }
        userScoreSpan.innerText = userScores[iForScores];
        computerScoreSpan.innerText = computerScores[iForScores];

        if(decision == "draw") {
            switch(userChoice[i]) {
                case "Rock": 
                    rock.classList.add("elementButtonNeutral");
                    setTimeout(() => rock.classList.remove("elementButtonNeutral"), 500);
                break;
                case "Paper": 
                    paper.classList.add("elementButtonNeutral");
                    setTimeout(() => paper.classList.remove("elementButtonNeutral"), 500);
                break;
                case "Scissor": 
                    scissor.classList.add("elementButtonNeutral");
                    setTimeout(() => scissor.classList.remove("elementButtonNeutral"), 500);
                break;
            }
        } else if(decision == "correct") {
            switch(userChoice[i]) {
                case "Rock": 
                    rock.classList.add("elementButtonCorrect");
                    setTimeout(() => rock.classList.remove("elementButtonCorrect"), 500);
                break;
                case "Paper": 
                    paper.classList.add("elementButtonCorrect");
                    setTimeout(() => paper.classList.remove("elementButtonCorrect"), 500);
                break;
                case "Scissor": 
                    scissor.classList.add("elementButtonCorrect");
                    setTimeout(() => scissor.classList.remove("elementButtonCorrect"), 500);
                break;
            }
        } else {
            switch(userChoice[i]) {
                case "Rock": 
                    rock.classList.add("elementButtonIncorrect");
                    setTimeout(() => rock.classList.remove("elementButtonIncorrect"), 500);
                break;
                case "Scissor": 
                    scissor.classList.add("elementButtonIncorrect");
                    setTimeout(() => scissor.classList.remove("elementButtonIncorrect"), 500);
                break;
                case "Paper": 
                    paper.classList.add("elementButtonIncorrect");
                    setTimeout(() => paper.classList.remove("elementButtonIncorrect"), 500);
                break;
            }
        }

        if(userScores[iForScores] == 5 || computerScores[iForScores] == 5) {
            if(currentGameNum<3) {
                rock.style.cursor = "not-allowed";
                paper.style.cursor = "not-allowed";
                scissor.style.cursor = "not-allowed";
                setTimeout(function () {
                    elementDiv.style.display = "none";
                    result.style.display = "none";
                    ucScore.style.display = "none";
                    scoreText.style.display = "none";
                    transitionDiv.style.display = "flex";
                    if(userScores[iForScores] ==5) {
                        transitionText.innerText = `You WON Game ${currentGameNum} by ${userScores[iForScores] - computerScores[iForScores]} points. Move onto Game ${currentGameNum+1}`
                    } else {
                        transitionText.innerText = `You LOST Game ${currentGameNum} by ${computerScores[iForScores] - userScores[iForScores]} points. Move onto Game ${currentGameNum+1}`
                    }
                }, 1500);
            } 
            else if(currentGameNum>=3) {
                rock.style.cursor = "not-allowed";
                paper.style.cursor = "not-allowed";
                scissor.style.cursor = "not-allowed";
                setTimeout(function () {
                    elementDiv.style.display = "none";
                    result.style.display = "none";
                    ucScore.style.display = "none";
                    scoreText.style.display = "none";
                    gameOverDiv.style.display = "flex";
                    finalResult.style.display = "flex";
                }, 1500);
                determineScoring(userScores, computerScores);
            }
        }
    }
}

transitionButton.onclick = () => {goToNextGame();};

/* once a game ends, the game elements disappear and the scores are printed alongside a continue button to the next game */

function goToNextGame() {

    elementDiv.style.display = "flex";
    result.style.display = "block";
    ucScore.style.display = "block";
    scoreText.style.display = "flex";
    gameOverDiv.style.display = "none";
    result.innerText = "";
    transitionText.innerText = "";
    transitionDiv.style.display = "none";
    iForScores++;
    userScoreSpan.innerText = userScores[iForScores];
    computerScoreSpan.innerText = computerScores[iForScores];
    currentGameNum++;


    rock.style.cursor = "pointer";
    paper.style.cursor = "pointer";
    scissor.style.cursor = "pointer";
}

restartButton.onclick = () => {restart();};

function restart() {
location.reload()
}

/* After the 3 games are played, this function determines the user's performance*/

function determineScoring(uScore, cScore) {

let totalWins = 0;
let totalLosses = 0;
let winPercentage = 0;
let losePercentage = 0;
let marginOfVictory = 0;
let marginOfLosses = 0;
uScore.shift()
cScore.shift()
for (let i = 0; i < uScore.length; i++) {
    if (uScore[i] > cScore[i]) {
        totalWins++;
        marginOfVictory+=uScore[i]-cScore[i];
    }
    else {
        marginOfLosses+=cScore-uScore;
    }
}
winPercentage = (totalWins/3)*100;

let performanceCategory = "";
if (winPercentage == 100 || marginOfVictory>=5) {
    performanceCategory = "Amazing";
} else if (winPercentage >= 60 || marginOfVictory>=2) {
    performanceCategory = "Excellent";
} else if (winPercentage >= 30 || marginOfLosses<=3) {
    performanceCategory = "Average";
} else {
    performanceCategory = "Poor";
}
if(uScore[iForScores-1] == 5) {
    finalResult.innerText = `You WON game ${currentGameNum} by ${uScore[iForScores-1] - cScore[iForScores-1]} points. In the end, you had a ${Math.floor(winPercentage)} win% and a combined ${marginOfVictory} margin of victory making you a ${performanceCategory} player.`
} else {
    finalResult.innerText = `You LOST game ${currentGameNum} by ${cScore[iForScores-1] - uScore[iForScores-1]} points. In the end, you had a ${Math.floor(winPercentage)} win% and a combined ${marginOfVictory} margin of victory making you a ${performanceCategory} player.`
}

}