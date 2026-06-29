class Solution {
    /**
     * @param {number} num
     * @return {boolean}
     */
    isPerfectSquare(num: number): boolean {
        if (num === 1) return true

        for (let i = 1; i < num / 2; i++) {
            if (i * i === num) {
                return true
            }
        }

        return false
    }
}
