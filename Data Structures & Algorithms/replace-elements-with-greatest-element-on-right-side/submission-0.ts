class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        const result = []
        const n = arr.length
        let maxRight = -1

        for (let i = n - 1; i >= 0; i--) {
            result[i] = maxRight
            maxRight = Math.max(maxRight, arr[i])
        }


        return result
    }
}
