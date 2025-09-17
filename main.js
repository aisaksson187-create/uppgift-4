
let firstNumber;
let secondNumber;
let correctAnswer;
let yourAnswer;

const yourNumber = document.querySelector("yourNumber");
const checkAnswerBtn = document.querySelector("checkAnswerBtn");
const resetBtn = document.querySelector("#resetBtn");
const resultBtn = document.querySelector("#resultBtn");
const question = document.querySelector("#question");
const result = document.querySelector("#result");



function checkAnswer() {
    yourAnswer = yourNumber.value;
    if (yourAnswer == correctAnswer) {

        result.textContent = "Rätt svar!";
    }
    else {
        result.contentText = "Tyvärr, fel svar... försök igen!";

    }

}

function createQuestion() {

    firstNumber = Math.round(random() * 10);
    secondNumber = Math.round(random() * 10);
    correctAnswer = firstNumber + secondNumber;
    question.textContent = firstNumber + " + " + secondNumber;

    result.textContent = "";
    yourNumber.value = "";

}

checkAnswerBtn.addEventListener(
    "click",
    checkAnswer
)

resetBtn.addEventListener(
    "click",
    createQuestion
)