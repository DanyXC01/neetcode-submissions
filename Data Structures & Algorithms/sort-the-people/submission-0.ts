class Solution {
    /**
     * @param {string[]} names
     * @param {number[]} heights
     * @return {string[]}
     */
    sortPeople(names: string[], heights: number[]): string[] {
        const map: Map<number, string> = new Map();
        const result: string[] = [];

        for (let i = 0; i < names.length; i++) {
            map.set(heights[i], names[i]);
        }

        heights.sort((a, b) => b - a);
        
        for (const height of heights) {
            result.push(map.get(height)!);
        }

        return result;
    }
}