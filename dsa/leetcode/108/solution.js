/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = (nums) => {
    if (nums.length === 0) {
        return null
    }

    const buildTree = (node, nums) => {
        if (nums.length === 0) return

        const mid = Math.floor(nums.length / 2)

        node.val = nums[mid]

        const leftArr = nums.slice(0, mid)
        const rightArr = nums.slice(mid + 1, nums.length)

        if (leftArr.length > 0) {
            node.left = new TreeNode()

            buildTree(node.left, nums.slice(0, mid))
        }

        if (rightArr.length > 0) {
            node.right = new TreeNode()

            buildTree(node.right, nums.slice(mid + 1, nums.length))
        }
    }

    const root = new TreeNode()

    buildTree(root, nums)

    return root
}