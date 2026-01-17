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
 * @return {number[]}
 */
const preorderTraversal = (root) => {
    const path = []

    const traverse = (node) => {
        if (!node) return

        path.push(node.val)

        if (node.left) {
            traverse(node.left)
        }

        if (node.right) {
            traverse(node.right)
        }
    }

    traverse(root)

    return path
}