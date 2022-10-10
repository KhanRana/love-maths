document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }
    runGame("addition");
})
/**
 * the function to generate to random numbers for the game
 */
function runGame(gameType) {
    document.getElementById("answer-box").value = "";
    let num1 = Math.floor(Math.random() * 25 + 1);
    let num2 = Math.floor(Math.random() * 25 + 1);

    if (gameType === "addition"){
        displayAdditionQuestion(num1, num2);
    } 
    else if (gameType === "subtract"){
        displaySubtractQuestion(num1, num2);
    }
    else if (gameType === "multiply"){
        displayMultiplyQuestion(num1, num2);
    }
    else if (gameType === "divide"){
        displayDivisionQuestion(num1, num2);
    }
    else {
        alert(`Unknown game type ${gameType}`);
        throw(`Unknown game type ${gameType}. Aborting!`);
    }
}

/**
 * checking user's answer and displaying correct answer
 */
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculateAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculateAnswer[0];

    if (isCorrect) {
        alert("Yaay you have got it right!!!");
        incrementScore();
    } else {
        alert(`Oops you answered ${userAnswer}. The correct answer is ${calculateAnswer[0]}`);
        incrementWrongAnswer();
    }
    runGame(calculateAnswer[1]);

}

/**
 * get the right values of operands and operator
 * from the document and calculate the correct answer
 */
function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;

    if(operator === '+'){
        return [operand1 + operand2 , "addition"];
    }
    else if(operator === '-'){
        return [operand1 - operand2 , "subtract"];
    }
    else if(operator === '*'){
        return [operand1 * operand2 , "multiply"];
    }
    else if(operator === '/'){
        return [(operand1 / operand2).toFixed(0), "divide"];
    }
    else {
        alert(`Unimplemented operator ${operator}`);
        throw(`Unimplemented operator ${operator}. Aborting!`)
    }

}
/**
 * increment the score(correct answers)
 */
function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").textContent = ++oldScore;
}

/**
 * increment the wrong answers)
 */
function incrementWrongAnswer() {
    let newScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").textContent = ++newScore;

}

/**
 * running addition operations
 */
function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = '+';

}

/**
 * display subtraction
 */
function displaySubtractQuestion(operand1, operand2) {
    if (operand2 > operand1){
        let temp = operand1;
        operand1 = operand2;
        operand2 = temp;
    }
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = '-';
    
}

/**
 * display multiplication
 */
function displayMultiplyQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = '*';

}


/**
 * display division
 */
 function displayDivisionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = '/';

}