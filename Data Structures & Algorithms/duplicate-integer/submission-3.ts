class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
      const map = new Map();

      for (let num of nums) {
        if (!map.has(num)) {
          map.set(num, 1);
        } else {
          map.set(num, map.get(num) + 1)
        }
      }

      return map.size < nums.length;
    }
}
