export function renderPoll(newPoll) {
  const newPollContainer = document.createElement('div');
  const newPollQuestion = document.createElement('p');
  const answerACountEl = document.createElement('p');
  const answerAEl = document.createElement('p');
  const answerBCountEl = document.createElement('p');
  const answerBEl = document.createElement('p');

  newPollQuestion.textContent = newPoll.question;
  answerAEl.textContent = `${newPoll.answerA}`;
  answerACountEl.textContent = `${newPoll.answerACount}`;
  answerBEl.textContent = `${newPoll.answerB}`;
  answerBCountEl.textContent = `${newPoll.answerBCount}`;

  newPollContainer.append(
    newPollQuestion,
    answerAEl,
    answerACountEl,
    answerBEl,
    answerBCountEl
  );

  return newPollContainer;
}

export function renderAllPolls(pollsArray) {
  const pastPolls = document.getElementById('div');

  for (let poll of pollsArray) {
    const pollItem = renderPoll(poll);
    pastPolls.append(pollItem);
  }

}
