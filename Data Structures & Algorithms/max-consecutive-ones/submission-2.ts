class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let bufferCount = 0;
        let max = 0

        for (let num = 0; num <= nums.length; num++) {
            if (nums[num] === 1) {
                bufferCount += 1
            } else {
                max = Math.max(max, bufferCount);
                bufferCount = 0
            }
        }   


        return max
    }
}
