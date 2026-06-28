class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums: number[]): void {
        const colors = [0, 0, 0];

        for (let i = 0; i < nums.length; i++) {
            colors[nums[i]] += 1;
        }

        let i = 0;
        for (let n = 0; n < colors.length; n++) {
            for (let j = 0; j < colors[n]; j++) {
                nums[i] = n;
                i++;
            }
        }
    }
}
