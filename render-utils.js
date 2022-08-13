export function renderPoll(poll) {

    const container = document.createElement('div');
    const pollQuestionEl = document.createElement('div');
    const answerOneEl = document.createElement('p');
    const answerTwoEl = document.createElement('p');
    
    pollQuestionEl.textContent = poll.question;
    answerOneEl.textContent = `${poll.optionA} - ${poll.votesA} votes`;
    answerTwoEl.textContent = `${poll.optionB} - ${poll.votesB} votes`;
   
    container.append(pollQuestionEl, answerOneEl, answerTwoEl);

    return container;
}