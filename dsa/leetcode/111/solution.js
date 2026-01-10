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
const minDepth = (root) => {
    let depths = []

    const traverse = (node, depth = 1) => {
        if (!node) return

        traverse(node.left, depth + 1)
        traverse(node.right, depth + 1)

        if (!node.left && !node.right) {
            depths = [...depths, depth]
        }
    }

    traverse(root)

    if (depths.length === 0) {
        return 0
    } else {
        return Math.min(...depths)
    }
}