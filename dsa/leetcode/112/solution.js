/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum = (root, targetSum) => {
    const traverse = (node, path = []) => {
        if (!node) return false

        if (!node.left && !node.right) {
            const sum = [...path, node].reduce((sum, n) => sum + n.val, 0)

            return sum === targetSum

        } else {
            return traverse(node.left, [...path, node]) || traverse(node.right, [...path, node])
        }
    }

    return traverse(root)
}