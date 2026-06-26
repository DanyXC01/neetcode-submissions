class Leaderboard {
    leaderboard: Map<number, number>;

    constructor() {
        this.leaderboard = new Map();
    }

    /**
     * @param {number} playerId
     * @param {number} score
     * @return {void}
     */
    addScore(playerId: number, score: number): void {
        if (!this.leaderboard.has(playerId)) {
            this.leaderboard.set(playerId, score);
        } else {
            this.leaderboard.set(playerId, this.leaderboard.get(playerId) + score)
        }
    }

    /**
     * @param {number} K
     * @return {number}
     */
    top(K: number): number {
        const sorted = Array.from(this.leaderboard).sort((a, b) => b[1] - a[1]);
        let result = 0;

        for (let i = 0; i < K; i++) {
            result += sorted[i][1];
        }

        return result;
    }

    /**
     * @param {number} playerId
     * @return {void}
     */
    reset(playerId: number): void {
        this.leaderboard.set(playerId, 0);
    }
}

/**
 * Your Leaderboard object will be instantiated and called as such:
 * var obj = new Leaderboard()
 * obj.addScore(playerId, score)
 * var param_2 = obj.top(K)
 * obj.reset(playerId)
 */
