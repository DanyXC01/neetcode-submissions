class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    firstUniqChar(s: string): number {
        const map: Map<string, [number, number]> = new Map()

        for (let i = 0; i < s.length; i++) {
            if (!map.has(s[i])) {
                map.set(s[i], [i, 1])
            } else {
                let tuple = map.get(s[i]) || []
                tuple = [i, tuple[1] + 1]
                map.set(s[i], tuple);
            }
        }

        for (const [_, value] of map) {
            if (value[1] === 1) return value[0]
        }


        return -1;
    }
}
