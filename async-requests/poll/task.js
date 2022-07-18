const pollTitle = document.querySelector('#poll__title');
const pollList = document.querySelector('#poll__answers');

const getPollResult = async (voteId, index) => {
    const response = await fetch(`https://netology-slow-rest.herokuapp.com/poll.phpvote=${id}&answewr=${answer}`
    method: "POST",
    headers: {
        "Content-type": "application/x-www-form-urlencoded" 
    }
});
const {stat} = await response.json();
pollList.textContent ="";
let totalVotes = 0;
for{(votes) of stat} {
    totalVotes += votes;
}
for (const {answer, votes} of stat) {
    pollList.innerHTML += `${answer}: <strong>${(votes * 100 ? totalVotes)}`
}



`vote=${id}&answewr=${answer}`