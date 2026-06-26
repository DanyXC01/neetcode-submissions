class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[][]}
     */
    findDifference(nums1: number[], nums2: number[]): number[][] {
        const nums1Set = new Set(nums1);
        const nums2Set = new Set(nums2);

        const res1 = [];
        const res2 = [];

        for (const num of nums1Set) {
            if (!nums2Set.has(num)) {
                res1.push(num);
            }
        }

        for (const num of nums2Set) {
            if (!nums1Set.has(num)) {
                res2.push(num)
            }
        }

        return [res1, res2]
    }
}
