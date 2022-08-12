// import functions and grab DOM elements
import { renderPoll } from 'render-utils.js';
// import { createPoll, getPoll } from 'fetch-utils.js';

const currentQuestionInput = document.getElementById('current-question-input');
const answerAInput = document.getElementById('answer-a-input');
const answerBInput = document.getElementById('answer-b-input');
const addPollButton = document.querySelector('#add-poll-button');

let currentPollQuestion = document.getElementById('current-poll-question');
let answerADisplay = document.getElementById('answer-b-display');
let answerBDisplay = document.getElementById('answer-a-display');
const addAButton = document.getElementById('add-a-button');
const addBButton = document.getElementById('add-b-button');
const subAButton = document.getElementById('sub-a-button');
const subBButton = document.getElementById('sub-b-button');

const publishButton = document.getElementById('publish-button');
let pastPollResults = document.getElementById('past-poll-results');


let question = '';
let optionA = '';
let optionB = '';
let votesA = 0;
let votesB = 0;


addPollButton.addEventListener('click', () => {
    const userQuestion = currentQuestionInput.value;
    const answerA = answerAInput.value;
    const answerB = answerBInput.value;
    question = userQuestion;
    optionA = answerA;
    optionB = answerB; 
    displayCurrentPoll();  

});

addAButton.addEventListener('click', () => {
    votesA++;
    displayCurrentPoll();
});

addBButton.addEventListener('click', () => {
    votesB++;
    displayCurrentPoll();

});

subAButton.addEventListener('click', () => {
    votesA--;
    displayCurrentPoll();

});

subBButton.addEventListener('click', () => {
    votesB--;
    displayCurrentPoll();

});
  
publishButton.addEventListener('click', () => {
    pastPollResults.textContent = '';
    const poll = {
        question: question,
        optionA: optionA,
        optionB: optionB,
        votesA: votesA,
        votesB: votesB,
    };
}),
displayAllPolls();
currentPollQuestion.textContent = '';
for (let poll of pastPolls) {
    const pollEl = renderPoll(poll);
    let question = '';
    let optionA = '';
    let optionB = '';
    let votesA = 0;
    let votesB = 0;
    pastPollResults.append(pollEl);
    displayCurrentPoll();
}

function displayCurrentPoll() {
    currentPollQuestion = '';
    const pollEl = renderPoll(question, optionA, optionB, votesA, votesB);
    currentPollQuestion.append(pollEl);
    currentQuestionInput.textContent = '';
    answerADisplay.textContent = '';
    answerBDisplay.textContent = '';
}