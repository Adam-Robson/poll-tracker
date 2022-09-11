export function renderPoll(poll) {
    const container = document.createElement('div');
    const pollQuestionEl = document.createElement('div');
    const answerOneEl = document.createElement('p');
    const answerTwoEl = document.createElement('p');
    
    pollQuestionEl.textContent = poll.question;
    answerOneEl.textContent = `${poll.answerA} ${poll.answerACount}`;
    answerTwoEl.textContent = `${poll.answerB} ${poll.answerBCount}`;
   
    container.append(pollQuestionEl, answerOneEl, answerTwoEl);

    return container;
}