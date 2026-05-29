class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let bufferCount = 0;
        let max = 0
        const targetNum = 1;

        for (let num = 0; num <= nums.length; num++) {
            if (nums[num] === targetNum) {
                bufferCount += 1
            } else {
                max = bufferCount > max ? bufferCount : max;
                bufferCount = 0
            }
        }   


        return max
    }
}
