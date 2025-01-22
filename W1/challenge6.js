function challenge6(votes) {
    if (votes.length === 0) {
        return "There is not vote yet";
    }
    let voteCounts = votes.reduce((counts, vote) => {
        counts[vote] = (counts[vote] || 0) + 1;
        return counts;
    }, {});
    let maxVotes = Math.max(...Object.values(voteCounts));
    let winners = Object.keys(voteCounts).filter(candidate => voteCounts[candidate] === maxVotes);
    if (winners.length === 1) {
        return `${winners[0]} is the winner`;
    } else {
        return `${winners.join(" and ")} are both winners`;
    }
}
