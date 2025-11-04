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
 * @return {boolean}
 */
const isBalanced = (root) => {
    const treeHeight = (node) => {
        if (!node) {
            return 0
        }

        const leftHeight = treeHeight(node.left)
        const rightHeight = treeHeight(node.right)

        if (leftHeight === -1 || rightHeight === -1) {
            return -1
        }

        const diff = Math.abs(leftHeight - rightHeight)

        if (diff > 1) {
            return -1
        }

        return Math.max(leftHeight, rightHeight) + 1
    }

    return treeHeight(root) !== -1
}