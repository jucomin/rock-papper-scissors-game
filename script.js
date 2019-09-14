const CHOICES = ['rock', 'paper', 'scissors']

let computerChoice
let userChoice
let isUserWinner

const submit = function() {
  let computerChoice = CHOICES[Math.floor(Math.random() * CHOICES.lenght)]
  userChoice = document.querySelector('.radio:checked').value
  checkWinner()
  console.log(userChoice, computerChoice, isUserWinner)
}

const checkWinner = () => {
  if (userChoice === 'rock' && computerChoice === 'scissor') {
    isUserWinner = true
  } else if (userChoice === 'paper' && computerChoice === 'rock') {
    isUserWinner = true
  } else if (userChoice === 'scissors' && computerChoice === 'paper') {
    isUserWinner = true
  } else if (userChoice === computerChoice) {
    isUserWinner = false
  } else {
    isUserWinner = false
  }
  return isUserWinner
}
