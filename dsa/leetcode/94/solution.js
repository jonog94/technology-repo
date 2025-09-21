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
const inorderTraversal = (root) => {
    const values = []

    const traverse = (node) => {
        if (node === null) {
            return
        }

        if (node.left !== null) {
            traverse(node.left)
        }

        values.push(node.val)

        if (node.right !== null) {
            traverse(node.right)
        }
    }

    traverse(root)

    return values
}