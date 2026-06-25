class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums: number[]): number {
        const map: Map<number, number> = new Map();

        for (const num of nums) {
            map.set(num, 1)
        }

        for (let i = 0; i <= nums.length; i++) {
            if (!map.has(i)) return i
        }
    }
}
