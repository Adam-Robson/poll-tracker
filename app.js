// Import Functions
// import { createPollRecord, getAllPollRecords } from './fetch-utils.js';
import { renderPoll } from './render-utils.js';

/** DOM Elements */
let activePollQuestion = document.getElementById('active-poll-question');
let activeAnswerA = document.getElementById('active-answer-a');
let activeAnswerB = document.getElementById('active-answer-b');
// let pastPollResults = document.getElementById('past-poll-results');
const addAButton = document.getElementById('add-a-button');
const addBButton = document.getElementById('add-b-button');
const subAButton = document.getElementById('sub-a-button');
const subBButton = document.getElementById('sub-b-button');
const addPollForm = document.getElementById('add-poll-form');
// const publishButton = document.getElementById('publish-button');

/** Initialize State */
let activePollQuestionText = '';

let answer_a = '';
let answer_b = '';
let a_count = 0;
let b_count = 0;

addPollForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(addPollForm);

  activePollQuestionText = data.get('question-input');
  answer_a = data.get('answer-a-input');
  answer_b = data.get('answer-b-input');

  activePollQuestion.textContent = activePollQuestionText;
  activeAnswerA.textContent = answer_a;
  activeAnswerB.textContent = answer_b;
  addPollForm.reset();

  displayCurrentPoll();
});

addAButton.addEventListener('click', () => {
  a_count++;
  displayCurrentPoll();
});

addBButton.addEventListener('click', () => {
  b_count++;
  displayCurrentPoll();
});

subAButton.addEventListener('click', () => {
  a_count--;
  displayCurrentPoll();
});

subBButton.addEventListener('click', () => {
  b_count--;
  displayCurrentPoll();
});

function displayCurrentPoll() {

  activePollQuestion.textContent = '';
  activeAnswerA.textContent = '';
  activeAnswerB.textContent = '';

  const activePoll = {
    question: activePollQuestionText,
    answerA: answer_a,
    answerB: answer_b,
    answerACount: a_count,
    answerBCount: b_count,
  };

  const poll = renderPoll(activePoll);
  activePollQuestion.append(poll);

  return activePollQuestion;
}

// publishButton.addEventListener('click', async () => {
//   const pollRecord = {
//     question: `${activePollQuestionText}`,
//     answerA: `${answer_a}`,
//     answerB: `${answer_b}`,
//     answerACount: `${a_count}`,
//     answerBCount: `${b_count}`,
//   };

//   await createPollRecord(pollRecord);
//   displayAllPolls();
// });

// export async function displayAllPolls() {
//   const allPollRecords = await getAllPollRecords();

//   const polls = renderAllPolls(allPollRecords);
//   pastPollResults.append(polls);
//   return pastPollResults;
// }
