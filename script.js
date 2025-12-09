const value = ['rock','paper','scissors']

function getComputerChoice(){
  const random = Math.floor(Math.random()*3)
  return value[random] 
}

const humanChoice = document.querySelectorAll(".select")
humanChoice.forEach(btn =>{
  btn.addEventListener("click", (e)=>
    playRound(e.target.alt,getComputerChoice()))
})

// function playGame(){

  

  // for(let x = 1 ; x < 6 ; x ++){
    
  //   const humanSelection = (getHumanChoice()).toLowerCase()
  //   const computerSelection = getComputerChoice()
  //   console.log(`Round ${x}`)
  //   playRound(humanSelection, computerSelection)
  // }
  
//   let winner = humanScore > computerScore ? "you": "computer"
//   console.log(`winner is ${winner}`)

//   console.log (`Rounds up!`)
  

// }

// playGame()

let humanScore = 0, computerScore = 0
const result_div = document.querySelector(".result")
const resultText = document.createElement("p")


function playRound(humanChoice, computerChoice){

  let result 
  if (humanChoice == computerChoice){
    result = `Tie! nobody wins no body loses 
      Your choice = ${humanChoice} and Computer choice = ${computerChoice}`
  }

  // for rock as human choice
  else if(humanChoice === 'rock' && computerChoice === 'paper'){
    computerScore += 1
    result = `You lose! Paper wraps Rock
      Your choice = ${humanChoice} and Computer choice = ${computerChoice}`
    
  }
  else if(humanChoice === 'rock' && computerChoice === 'scissors'){
    result = `You wins! Rock shamashes Scissors
      Your choice = ${humanChoice} and Computer choice = ${computerChoice}`
    humanScore += 1
  }

// for paper as human choice
  else if(humanChoice === 'paper' && computerChoice === 'scissors'){
    result = `You lose! Scissors cuts Paper
      Your choice = ${humanChoice} and Computer choice = ${computerChoice}`
    computerScore += 1
  }
  else if(humanChoice === 'paper' && computerChoice === 'rock'){
    result =  `You Wins! Paper wraps Rock.
      Your choice = ${humanChoice} and Computer choice = ${computerChoice}`
    humanScore += 1
  }

// for scissors as human choice
  else if(humanChoice === 'scissors' && computerChoice === 'paper'){
    result =  `You Wins! Scissors cuts Paper
      Your choice = ${humanChoice} and Computer choice = ${computerChoice}`
    humanScore += 1
  }
  else if(humanChoice === 'scissors' && computerChoice === 'rock'){
    result =  `You lose! Rock shamashes Scissors 
      Your choice = ${humanChoice} and Computer choice = ${computerChoice}`
    computerScore += 1
  }

  resultText.textContent = result
  result_div.appendChild(resultText)
}