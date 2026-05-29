class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: any[], val: number): number {
        const n = nums.length
        let k = n;

        for (let i = 0; i < n; i++) {
            if (nums[i] === val) {
                nums[i] = '_'
                k--;
            }
        }

        nums.sort()
        return k;
    }
}
