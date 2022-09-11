// import functions and grab DOM elements
import { createPoll, getPolls } from './fetch-utils.js';
import { renderPoll } from './render-utils.js';

let currentPollQuestion = document.getElementById('current-poll-question');
const addAButton = document.getElementById('add-a-button');
const addBButton = document.getElementById('add-b-button');
const subAButton = document.getElementById('sub-a-button');
const subBButton = document.getElementById('sub-b-button');
const createForm = document.getElementById('create-form');
const publishButton = document.getElementById('publish-button');
let pastPollResults = document.getElementById('past-poll-results');

let question = '';
let answerA = '';
let answerB = '';
let answerACount = 0;
let answerBCount = 0;

createForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(createForm);
    
    question = data.get('question-input');
    answerA = data.get ('answer-a-input');
    answerB = data.get ('answer-b-input');
     
    createForm.reset(); 

    addAButton.disabled = false;
    addBButton.disabled = false;
    subAButton.disabled = false;
    subBButton.disabled = false;
    publishButton.disabled = false;

    displayCurrentPoll();
});

addAButton.addEventListener('click', () => {
    answerACount++;
    displayCurrentPoll();
});

addBButton.addEventListener('click', () => {
    answerBCount++;
    displayCurrentPoll();
});

subAButton.addEventListener('click', () => {
    answerACount--;
    displayCurrentPoll();
});

subBButton.addEventListener('click', () => {
    answerBCount--;
    displayCurrentPoll();
});
  
publishButton.addEventListener('click', async() => {
    const poll = {
        question: `${question}`,
        answerA: `${answerA}`,
        answerB: `${answerB}`,
        answerACount: `${answerACount}`,
        answerBCount: `${answerBCount}`,
    };
    
    question = '';
    answerA = '';
    answerB = '';
    answerACount = 0;
    answerBCount = 0;

    await createPoll(poll);
    await displayAllPolls();
    displayCurrentPoll();
});

function displayCurrentPoll() {
    
    currentPollQuestion.textContent = '';
    
    const nuPoll = {
        question: question,
        answerA: answerA,
        answerB: answerB,
        answerACount: answerACount,
        answerBCount: answerBCount,
    };

    const renderedPoll = renderPoll(nuPoll);    
    currentPollQuestion.append(renderedPoll);    
}

async function displayAllPolls() {
    const allPolls = await getPolls();
    pastPollResults.textContent = '';
    
    for (let poll of allPolls) {
        const container = renderPoll(poll);
        pastPollResults.append(container);  
    }
}

await displayAllPolls();       
displayCurrentPoll();