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
let optionA = '';
let optionB = '';
let votesA = 0;
let votesB = 0;

createForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(createForm);
    
    question = data.get('question-input');
    optionA = data.get ('answer-a-input');
    optionB = data.get ('answer-b-input');
     
    createForm.reset(); 

    addAButton.disabled = false;
    addBButton.disabled = false;
    subAButton.disabled = false;
    subBButton.disabled = false;
    publishButton.disabled = false;

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
        question: `${question}`,
        optionA: `${optionA}`,
        optionB: `${optionB}`,
        votesA: `${votesA}`,
        votesB: `${votesB}`,
    };
    
    question = '';
    optionA = '';
    optionB = '';
    votesA = 0;
    votesB = 0;

    await createPoll(poll);
    await displayAllPolls();
    displayCurrentPoll();
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