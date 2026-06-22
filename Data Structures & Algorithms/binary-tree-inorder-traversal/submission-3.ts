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
     * @return {number[]}
     */
    inorderTraversal(root: TreeNode | null): number[] {
        const result: number[] = []
        const stack: TreeNode[] = []
        let current: TreeNode | null = root

        while (current !== null || stack.length > 0) {
            while (current !== null) {
                stack.push(current)
                current = current.left
            }
            const node = stack.pop()!
            result.push(node.val)
            current = node.right
        }

        return result
    }
}