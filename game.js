//load questions.js
var importjava = document.createElement('script');
importjava.src = 'questions.js';
document.head.appendChild(importjava);


//assign quiz page a variable
var questionContainer = document.getElementById("questionContainer");

//question number keep track of how many questions gone through
var currentQuestion = 0;
//submitbutton 
var submitbtn = document.getElementById('submitbtn');

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
    console.log(questions[i].title);
    //show answer
    for (var j=0;j<4;) {
        var button = document.createElement('button');
        button.innerText = questions[i].choices[j];
        button.classList.add("btn");
        button.addEventListener('click', selectanswer);
        //check if choice is correct
        //I have no idea if this works
        if (questions[i].choices[j] === questions[i].answer[0]) {
            button.dataset.answer = questions[i].answer[0];
            
        }
        answerButtons.appendChild(button);
        console.log(questions[i].choices[j]);
        j++;
    }

}

//get rid of answer choices after next question
function resetChoices() {
    submitbtn.classList.add('hide');
    //get rid of old buttons
    for (var j=0;j<1;) {
        if (answerButtons.firstChild) {
            answerButtons.removeChild(answerButtons.firstChild);
        } else {j++;}
    }
        
}

function selectanswer() {

}

function submitfunction() {

}

//combine functions and make a for loop of each of the questions
//then make an if statement for the timer