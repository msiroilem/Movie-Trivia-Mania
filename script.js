// Global Variables
let userChoice = ' '
let answersCorrect = 0
let userPosition = 0

const playGameButton = document.querySelector('.playGameBtn')
const answerFields = document.querySelectorAll('.answer-fields')
const questionField = document.querySelector('#question-field')
const highScore = document.querySelector('.high-score')
const restartButton = document.querySelectorAll('#restart')

const questions = [
  'What was the release year for the Ridley Scott directed movie, Alien?',
  'What was the number of samurai in the 1954 movie directed by Akira Kurosawa?',
  'Who is the lead actress in the 1978 movie, Halloween?',
  'What was the directorial debut of Christopher Nolan?',
  'Which actor has NOT played the role of Bruce Wayne in the Batman franchise?',
  'Which movie prominently features a character embodying Death playing chess?',
  'Which of these movies was NOT directed by Paul Thomas Anderson?',
  'Which of these film festivals occurs in January?',
  'Which of these movies was released most recently in theaters?',
  'Which movie won Best Picture at the 92nd Academy Awards?'
]

const answers = [
  ['1978', '1979', '1980', '1981'],
  ['Five', 'Nine', 'Three ', 'Seven'],
  ['Margot Kidder', 'Adrienne King', 'Jamie Lee Curtis', 'Clare Higgins'],
  ['Following', 'Dunkirk', 'Memento', 'Insomnia'],
  ['Michael Keaton', 'Christian Bale', 'Adam West', 'Jared Leto'],
  ['Se7en', 'Seven Chances', 'The Seventh Seal ', '7th Heaven'],
  ['Hard Eight', 'Event Horizon', 'Junun', 'Phantom Thread'],
  ['Sundance', 'Berlinale', 'Tribeca', 'South by Southwest'],
  ['Black Widow', 'Cruella', 'Jungle Cruise', 'Nobody'],
  ['Once Upon a Time in Hollywood', 'Nomadland', 'Mank', 'Parasite']
]

const correctAnswers =
  answers[
    ([0][1],
    answers[1][3],
    answers[2][2],
    answers[3][0],
    answers[4][3],
    answers[5][2],
    answers[6][1],
    answers[7][0],
    answers[8][2],
    answers[9][3])
  ]

// Event Listeners

// Create way for questions to appear on game.html page

questionField.innerHTML = `${questions[0]}`

// Create way to click answer and have it register as correct or incorrect

answerFields.innerHTML = `${answers[0]}`

// Create way to add and subtract from score based on correct and incorrect answers
// for (let i = 0; i < answerFields.length; i++) {
//   if (userChoice === answers) {
//   }
// }

function restart() {
  location: reload()
  restartButton.addEventListener('click', restart)
}
// Create way to put userScore on high score field

// Create way to interact with user with correct and incorrect answers

//Create timer of 10 seconds so that user is forced to answers promptly
let timer = setInterval(countdownTimer, 10000)

function countdownTimer() {}

function stopTimer() {
  clearInterval(timer)
}

//Subtract from user score and register answer to current question as incorrect if timer runs out.

//If timer doesn't run out while answering question correctly, move on to next question and award user points
