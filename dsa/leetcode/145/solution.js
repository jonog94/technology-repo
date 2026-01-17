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
const postorderTraversal = (root) => {
    const path = []

    const traverse = (node) => {
        if (!node) return

        traverse(node.left)
        traverse(node.right)

        path.push(node.val)
    }

    traverse(root)

    return path
}