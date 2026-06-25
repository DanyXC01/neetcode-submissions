class Solution {
    /**
     * @param {string} text
     * @return {number}
     */
    maxNumberOfBalloons(text: string): number {
        const target = "balloon"; // 1 1 2 2 1
        const map: Map<string, number> = new Map();
        let count = 0;

        for (let char of text) {
            if (target.includes(char) && map.has(char)) {
                map.set(char, (map.get(char) || 0) + 1);
            } else if (target.includes(char)) {
                map.set(char, 1);
            }
        }

        const b = map.get('b') || 0;
        const a = map.get('a') || 0;
        const l = Math.floor((map.get('l') || 0) / 2);
        const o = Math.floor((map.get('o') || 0) / 2);
        const n = map.get('n') || 0;

        return Math.min(b, a, l, o, n);
    }
}