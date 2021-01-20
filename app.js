const question = document.getElementById('#question');
const progress = document.getElementById('#progress');
const score = document.getElementById('#score');

const choiceA = document.getElementById('#A');
const choiceB = document.getElementById('#B');
const choiceC = document.getElementById('#C');
const choiceD = document.getElementById('#D');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

const questionsList = {
  // 5 or more questions are required
  questionsArray: [
    {
      question: 'Which of the following is NOT a name of one of the Pac-Man Ghosts?',
      answers: [
        'Pinky',
        'Stinky',
        'Blinky',
        'Clyde'
      ],
      correctAnswer: 'Stinky'
    },
    {
      question: 'What year was Pac-Man introduced to America?',
      answers: [
        '1970',
        '1980',
        '1972',
        '1984'
      ],
      correctAnswer: '1980'
    }
    {
      question: 'How many points are earned when you collect a special Cherry Fruit Object?',
      answers: [
        '10',
        '100',
        '200',
        '500'
      ],
      correctAnswer: '100'
    }
    {
      question: 'What food was allegedly the inspiration for the Pac-Man design?',
      answers: [
        'Tacos',
        'Gumballs',
        'Lemons',
        'Pizza'
      ],
      correctAnswer: 'Pizza'
    }
    {
      question: 'Which of the following colors in NOT a color of one of the Pac-Man Ghost?',
      answers: [
        'Green',
        'Red',
        'Pink',
        'Blue'
      ],
      correctAnswer: 'Green'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

const scoreMax = 100;
const maxQuestions: 5;

startGame = function () {
  questionCounter = 0;
  score = 0;
  getNewQuestion()
}

getNewQuestion = function() {
  questionCounter++;
  if ()

 


