//load questions.js
var importjava = document.createElement('script');
importjava.src = 'questions.js';
document.head.appendChild(importjava);

//assign quiz page a variable
var questionContainer = document.getElementById("questionContainer");

//question number keep track of how many questions gone through
var currentQuestion = 0;
//keep track of score
var score = 0;

//start-button javascript stuff
var startbtn = document.getElementById('startbtn');
startbtn.addEventListener('click',starter);
function starter() {
    startbtn.classList.add('hide');
    questionContainer.classList.remove('hide');
    //set up first question
    currentQuestion = 0;
    nextQuestion();
}

//set up next question
function nextQuestion() {
    //this function calls the next two functions on the page
    //to delete old answer choices and add new ones and question
    resetChoices();
    questionNum(currentQuestion);
}

//shows question on screen
var questionhtml=document.getElementById("question");
var answerButtons=document.getElementById("answerButtons");
function  questionNum(i) {
    //show question
    questionhtml.innerText=questions[i].title;
    //show answer
    for (var j=0;j<4;) {
        var button = document.createElement('button');
        button.innerText = questions[i].choices[j];
        button.value = questions[i].choices[j];
        button.classList.add("btn");
        button.addEventListener('click', selectChoice);
        //check if choice is correct
        //I have no idea if this works
        
        answerButtons.appendChild(button);
        j++;
    }

}

//get rid of answer choices after next question
function resetChoices() {
    //get rid of old buttons
    for (var j=0;j<1;) {
        if (answerButtons.firstChild) {
            answerButtons.removeChild(answerButtons.firstChild);
        } else {j++;}
    }
        
}

//test if selected answer is correct and go to next question
function selectChoice(i) {
 var selectedchoice = i.target;
    // check if user guessed wrong
    if (this.value === questions[currentQuestion].answer) {
        score++;
        console.log('Score: '+score);
    }
    // Change to next question
    console.log('Score: '+score);
    currentQuestion++;
    //Go to next question or end quiz
    if (currentQuestion === questions.length) {
        endQuiz();
    } else {
        nextQuestion();
    }

}

//the quiz is over
var yourScore = document.getElementById("yourScore");
var scoreContainer = document.getElementById("scoreContainer");
function endQuiz() {
    questionContainer.classList.add('hide');
    scoreContainer.classList.remove('hide');
    //display score
    yourScore.innerText="Your Score: "+score;
}


//Notes for later:
//combine functions and make a for loop of each of the questions
//then make an if statement for the timer