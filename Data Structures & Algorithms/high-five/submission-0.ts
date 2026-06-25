class Solution {
    /**
     * @param {number[][]} items
     * @return {number[][]}
     */
    highFive(items: number[][]): number[][] {
        const map: Map<number, number[]> = new Map();
        const result: number[][] = [];


        const sum = (array: number[]): number => {
            return array.reduce((acc, curr) => acc + curr, 0);
        }

        for (const item of items) {
            const array = map.get(item[0]) ?? [];
            array.push(item[1]);
            map.set(item[0], array);
        }

        for (const [key, value] of map) {
            const sortedArr = value.sort((a, b) => b - a).slice(0, 5);
            result.push([key, Math.floor(sum(sortedArr) / 5)]);
        }

        return result.sort((a, b) => a[0] - b[0]);

    }
}