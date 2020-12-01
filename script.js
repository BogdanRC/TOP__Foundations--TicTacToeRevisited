const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');

btnRock.addEventListener('click', () => { playGame('rock') });
btnPaper.addEventListener('click', () => { playGame('paper') });
btnScissors.addEventListener('click', () => { playGame('scissors') });

let finalUserScore = 0;
let finalCompScore = 0;
function playGame(userChoice) {
    let compChoice = '';

    const result = document.querySelector('#result');
    const userScore = document.querySelector('#userscore');
    const compScore = document.querySelector('#compscore');


    function compRandom() {
        const choiceRandomizer = Math.random();

        switch (true) {
            case (choiceRandomizer < 0.34):
                compChoice += "rock";
                break;
            case (choiceRandomizer < 0.67):
                compChoice += "paper";
                break;
            default: compChoice += "scissors";
        }
        console.log(compChoice);
    }

    compRandom();

    switch (true) {
        case finalUserScore == 5:
            result.textContent = `You won the game.`;
            break;
        case finalCompScore == 5:
            result.textContent = `You lost the game.`;
            break;

        case (userChoice == compChoice):
            result.textContent = `It's a draw`;
            break;

        case (compChoice == `scissors` && userChoice == `rock` ||
            compChoice == `rock` && userChoice == `paper` ||
            compChoice == `paper` && userChoice == `scissors`):
            result.textContent = `The computer chose ${compChoice}. You win this round.`;
            ++finalUserScore;
            break;

        case (compChoice == `paper` && userChoice == `rock` ||
            compChoice == `scissors` && userChoice == `paper` ||
            compChoice == `rock` && userChoice == `scissors`):
            result.textContent = `The computer chose ${compChoice}. You lose this round.`;
            ++finalCompScore;
            break;

    }
    compScore.textContent = finalCompScore;
    userScore.textContent = finalUserScore;
    /* values are called again to update them during the function
    call without them the game score is always one round behind
    */
}