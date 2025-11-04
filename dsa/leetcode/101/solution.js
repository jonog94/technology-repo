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
const isSymmetric = (root) => {
    if (!root) {
        return true
    }

    const symmetryCheck = (left, right) => {
        if (!left && !right) {
            return true
        }

        if (!left || !right) {
            return false
        }

        if (left.val !== right.val) {
            return false
        }

        return symmetryCheck(left.left, right.right) && symmetryCheck(left.right, right.left)
    }

    return symmetryCheck(root.left, root.right)
}