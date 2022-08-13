// import functions and grab DOM elements
import { createPoll, getPolls } from './fetch-utils.js';
import { renderPoll } from './render-utils.js';

const questionInput = document.getElementById('question-input');
const answerAInput = document.getElementById('answer-a-input');
const answerBInput = document.getElementById('answer-b-input');
const addPollButton = document.getElementById('add-poll-button');
let currentPollQuestion = document.getElementById('current-poll-question');
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

addPollButton.addEventListener('click', () => {
    question = questionInput.value;
    optionA = answerAInput.value;
    optionB = answerBInput.value;
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
  
publishButton.addEventListener('click', async() => {
    const poll = {
        question: question,
        optionA: optionA,
        optionB: optionB,
        votesA: votesA,
        votesB: votesB,
    };
    
    await createPoll(poll);

    displayAllPolls();
   
});

function displayCurrentPoll() {
    
    currentPollQuestion.textContent = '';
    const nuPoll = {
        question: question,
        optionA: optionA,
        optionB: optionB,
        votesA: votesA,
        votesB: votesB,
    };
    const renderedPoll = renderPoll(nuPoll);    
    currentPollQuestion.append(renderedPoll);
    questionInput.value = '';
}

async function displayAllPolls() {
    const allPolls = await getPolls();
    for (let poll of allPolls) {
        const container = renderPoll(poll);
        pastPollResults.append(container);
       
    }
}
            
displayCurrentPoll();