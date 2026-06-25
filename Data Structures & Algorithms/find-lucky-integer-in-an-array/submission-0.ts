class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    findLucky(arr: number[]): number {
        const map: Map<number, number> = new Map();
        let largest = -1;

        for (const elem of arr) {
            if (map.has(elem)) {
                map.set(elem, map.get(elem) + 1);
            } else {
                map.set(elem, 1)
            }
        }

        for (const [key, value] of map) {
            if (key === value) {
                largest = Math.max(largest, key)
            }
        }

        return largest
    }
}
