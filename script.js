console.log("Linked successfully")

const value = ['rock','paper','scissors']

function getComputerChoice(){
  const random = Math.floor(Math.random()*3)
  return value[random] 
}

// getComputerChoice()
function getHumanChoice(){
  let choice = prompt("What is your choice? rock paper or scissors");
  return choice
}

// play game function ... I am not writting playRound inside play game 
// because why do I need to ! now i got it...

function playGame(){

  let humanScore = 0, computerScore = 0

  for( x = 1 ; x < 6 ; x ++){
    
    const humanSelection = (getHumanChoice()).toLowerCase()
    const computerSelection = getComputerChoice()
    console.log(`Round ${x}`)
    playRound(humanSelection, computerSelection)
  }
  
  let winner = humanScore > computerScore ? "you": "computer"
  console.log(`winner is ${winner}`)

  console.log (`Rounds up!`)
  

  function playRound(humanChoice, computerChoice){

  if (humanChoice == computerChoice){
    console.log (`Tie! nobody wins no body loses 
      Your choice = ${humanChoice} and Computer choice = ${computerChoice}`)
  }

  // for rock as human choice
  else if(humanChoice === 'rock' && computerChoice === 'paper'){
    computerScore += 1
    console.log (`You lose! Paper wraps Rock
      Your choice = ${humanChoice} and Computer choice = ${computerChoice}`)
    
  }
  else if(humanChoice === 'rock' && computerChoice === 'scissors'){
  
    console.log (`You wins! Rock shamashes Scissors
      Your choice = ${humanChoice} and Computer choice = ${computerChoice}`)
    humanScore += 1
}

// for paper as human choice
  else if(humanChoice === 'paper' && computerChoice === 'scissors'){
  
    console.log (`You lose! Scissors cuts Paper
      Your choice = ${humanChoice} and Computer choice = ${computerChoice}`)
    computerScore += 1
  }
    else if(humanChoice === 'paper' && computerChoice === 'rock'){
  
    console.log (`You Wins! Paper wraps Rock.
      Your choice = ${humanChoice} and Computer choice = ${computerChoice}`)
    humanScore += 1
  }

  // for scissors as human choice
    else if(humanChoice === 'scissors' && computerChoice === 'paper'){
  
    console.log (`You Wins! Scissors cuts Paper
      Your choice = ${humanChoice} and Computer choice = ${computerChoice}`)
    humanScore += 1
  }
    else if(humanChoice === 'scissors' && computerChoice === 'rock'){
  
    console.log (`You lose! Rock shamashes Scissors 
      Your choice = ${humanChoice} and Computer choice = ${computerChoice}`)
    computerScore += 1
  }
}
}

playGame()