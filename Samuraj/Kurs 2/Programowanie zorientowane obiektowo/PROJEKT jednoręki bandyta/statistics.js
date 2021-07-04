class Statistics {
    constructor() {
        this.gameResults = [];
    }
    addResult(win, bet) {
        const gameResult = { win, bet };
        this.gameResults.push(gameResult);
    }

    showResult(bet) {
        const games = this.gameResults.length;
        let wins = 0;
        let loses = 0;
        this.gameResults.forEach(result => result.win ? wins++ : loses++);
        return [games, wins, loses];
    }
}