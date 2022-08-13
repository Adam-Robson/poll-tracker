// import functions and grab DOM elements
import { createPoll } from './fetch-utils.js';
import { renderPoll } from './render-utils.js';
// import { createPoll, getPoll } from 'fetch-utils.js';

const questionInput = document.getElementById('question-input');
const answerAInput = document.getElementById('answer-a-input');
const answerBInput = document.getElementById('answer-b-input');
const addPollButton = document.getElementById('add-poll-button');
let currentPollQuestion = document.getElementById('current-poll-question');
let answerADisplay = document.getElementById('answer-a-display');
let answerBDisplay = document.getElementById('answer-b-display');
let answerACount = document.getElementById('answer-a-count');
let answerBCount = document.getElementById('answer-b-count');
const addAButton = document.getElementById('add-a-button');
const addBButton = document.getElementById('add-b-button');
const subAButton = document.getElementById('sub-a-button');
const subBButton = document.getElementById('sub-b-button');

const publishButton = document.getElementById('publish-button');
let pastPollResults = document.getElementById('past-poll-results');

//STATE 

let question = '';
let optionA = '';
let optionB = '';
let votesA = 0;
let votesB = 0;


function displayCurrentPoll() {
    currentPollQuestion.textContent = '';
    const nuPoll = {
        question: question,
        optionA: optionA,
        optionB: optionB,
        votesA: votesA,
        votesB: votesB,
    }
    const renderedPoll = renderPoll(nuPoll);
    console.log(renderedPoll)
    currentPollQuestion.append(renderedPoll);
}

addPollButton.addEventListener('click', () => {
        console.log('kindness')    
        question = questionInput.value;
        optionA = answerAInput.value;
        optionB = answerBInput.value;
        console.log('question', question)
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
  
publishButton.addEventListener('click', async () => {
    pastPollResults.textContent = '';
    const poll = {
        question: question,
        optionA: optionA,
        optionB: optionB,
        votesA: votesA,
        votesB: votesB,
    }
   
    await createPoll(poll);

    for (let poll of pastPollResults) {
        const pollEl = renderPoll(newPastPoll);
        pastPollResults.append(pollEl);
        currentPollQuestion.textContent = '';
        displayCurrentPoll();
    }
});





// function displayCurrentPoll() {
//     currentPollQuestion = '';
//     answerADisplay = '';
//     answerBDisplay = '';
//     renderPoll(poll);
    
//     currentQuestionInput.textContent = '';
//     answerAInput.textContent = '';
//     answerBInput.textContent = '';
// }

