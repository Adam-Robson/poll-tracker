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

export function renderAllPolls(allPolls) {
  const pastPollsEl = document.createElement('div');
  const pastPollsContainer = document.createElement('div');

  const pollRecordIdEl = document.createElement('p');
  const pollRecordQuestionEl = document.createElement('p');
  const pollRecordAnswerAEl = document.createElement('p');
  const pollRecordAnswerBEl = document.createElement('p');
  const pollRecordAnswerACountEl = document.createElement('span');
  const pollRecordAnswerBCountEl = document.createElement('span');

  for (let poll of allPolls) {
    pollRecordIdEl.textContent = `id: ${poll.id}`;
    pollRecordQuestionEl.textContent = `question: ${poll.question}`;
    pollRecordAnswerAEl.textContent = `answer a: ${poll.answerA}`;
    pollRecordAnswerBEl.textContent = `answer b: ${poll.answerB}`;
    pollRecordAnswerACountEl.textContent = `answer a count: ${poll.answerACount}`;
    pollRecordAnswerBCountEl.textContent = `answer b count: ${poll.answerBCount}`;

    pastPollsContainer.append(
      pollRecordIdEl,
      pollRecordQuestionEl,
      pollRecordAnswerAEl,
      pollRecordAnswerACountEl,
      pollRecordAnswerBEl,
      pollRecordAnswerBCountEl
    );
  }

  pastPollsEl.append(
    pastPollsContainer
  );

  return pastPollsEl;
}
