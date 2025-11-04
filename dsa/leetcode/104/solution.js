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
 * @return {number}
 */
const maxDepth = (root) => {
    if (!root) {
        return 0
    }

    let depth = 1

    const traverse = (node, currentDepth) => {
        if (!node) return

        if (currentDepth > depth) {
            depth = currentDepth
        }

        if (node.left) {
            traverse(node.left, currentDepth + 1)
        }

        if (node.right) {
            traverse(node.right, currentDepth + 1)
        }
    }

    traverse(root, depth)

    return depth
}