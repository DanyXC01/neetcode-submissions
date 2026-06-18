/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        const stack = [];
        let current = root;
        let count = 0;

        while (current !== null || stack.length > 0) {
            while (current !== null) {
                stack.push(current);
                current = current.left;
            }
            current = stack.pop();
            if (++count === k) return current.val;
            current = current.right;

        }

        return undefined;
    }
}
