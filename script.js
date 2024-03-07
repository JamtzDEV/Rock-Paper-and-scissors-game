function getComputerChoice(){
    const choises = ['rock','paper','seasors'];
    return choises[Math.floor(Math.random() * choises.length)]
}

function playRound(playerSelection,computerSelection){
    if(playerSelection === computerSelection){
        return `it's a tie`
    } else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        return `You win :D`
    } else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        return `You win :D`
    } else if(playerSelection === 'paper' && computerSelection === 'rock'){
        return `You win :D`
    } else{
        return `You lose D:`
    }
}

function playGame(){
    const player_choice = prompt('Select between in: Rock paper and seasors').toLocaleLowerCase();
    const computer_choice = getComputerChoice();
    alert(playRound(player_choice,computer_choice));

}

playGame()
playGame()
playGame()
playGame()
playGame()

