class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numsSet = new Set([...nums])
        console.log(numsSet.size)
        console.log(nums.length)
        return numsSet.size !== nums.length
    }
}
