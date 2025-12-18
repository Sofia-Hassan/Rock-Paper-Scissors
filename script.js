const value = ['rock','paper','scissors']

function getComputerChoice(){
  const random = Math.floor(Math.random()*3)
  return value[random] 
}

const humanChoice = document.querySelectorAll(".select")
humanChoice.forEach(btn =>{
  btn.addEventListener("click", (e)=>
    playGame(e.target.alt,getComputerChoice()))
})

function playGame(x, y){
   
  playRound(x, y)
  if (round == 5){
    round = 0
    humanChoice.forEach(btn => btn.disabled = true )
    let winner = humanScore > computerScore ? "You": "Computer"
    finalWinner.textContent = `Rounds up! ${winner} wins`
    result_div.appendChild(finalWinner)
    playAgainbtn.textContent = `Play again`
    result_div.appendChild(playAgainbtn)
    playAgainbtn.addEventListener('click',playAgain)

  } 
}

let humanScore = 0, computerScore = 0, round = 0
const roundNo = document.querySelector('.round')
const result_div = document.querySelector(".result")
const resultText = document.createElement("h2")
const resultChoices = document.createElement('p')
const finalWinner = document.createElement('h1')
const playAgainbtn = document.createElement('button')



function playRound(humanChoice, computerChoice){

  round += 1
  let result 
  if (humanChoice == computerChoice){
    result = `Tie! nobody wins no body loses.`
  }

  // for rock as human choice
  else if(humanChoice === 'rock' && computerChoice === 'paper'){
    computerScore += 1
    result = `You lose! Paper wraps Rock.`
    
  }
  else if(humanChoice === 'rock' && computerChoice === 'scissors'){
    result = `You wins! Rock shamashes Scissors.`
    humanScore += 1
  }

// for paper as human choice
  else if(humanChoice === 'paper' && computerChoice === 'scissors'){
    result = `You lose! Scissors cuts Paper.`
    computerScore += 1
  }
  else if(humanChoice === 'paper' && computerChoice === 'rock'){
    result =  `You Wins! Paper wraps Rock.`
    humanScore += 1
  }

// for scissors as human choice
  else if(humanChoice === 'scissors' && computerChoice === 'paper'){
    result =  `You Wins! Scissors cuts Paper.`
    humanScore += 1
  }
  else if(humanChoice === 'scissors' && computerChoice === 'rock'){
    result =  `You lose! Rock shamashes Scissors.`
    computerScore += 1
  }

  roundNo.textContent = `Round ${round} `
  resultText.textContent =  result
  resultChoices.textContent = `Your Choice: ${humanChoice} \u00A0\u00A0\u00A0\u00A0\u00A0 Computer Choice: ${computerChoice}`
  result_div.appendChild(resultText)
  result_div.appendChild(resultChoices)
}

function playAgain(){
  humanChoice.forEach(btn => btn.disabled = false )
  roundNo.textContent = `Round 1`
  result_div.removeChild(resultText)
  result_div.removeChild(resultChoices)
  result_div.removeChild(finalWinner)
  result_div.removeChild(playAgainbtn)
}