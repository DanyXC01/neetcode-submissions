class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    findTheDifference(s: string, t: string): string {
        const map = new Map();

        if (s.length === 0) return t

        for (let char of s) {
            if (map.has(char)) {
                map.set(char, map.get(char) + 1)
            } else {
                map.set(char, 1)
            }
        }

        for (let char of t) {
            if (map.get(char) > 0) {
                map.set(char, map.get(char) - 1)
            } else if (!map.has(char) || map.get(char) === 0) {
                return char
            }
        }

        console.log(map)

    }
}
