class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findErrorNums(nums: number[]): number[] {
        const map: Map<number, number> = new Map();
        let duplicate = -1;
        let missing = -1;

        for (const num of nums) {
            if (!map.has(num)) {
                map.set(num, 1);
            } else {
                map.set(num, map.get(num) + 1);
            }
        }

        for (let i = 1; i <= nums.length; i++) {
            if (map.has(i) && map.get(i) > 1) duplicate = i;
            if (!map.has(i)) missing = i;
        }


        return [duplicate, missing];
    }
}