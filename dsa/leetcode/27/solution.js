/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
    for (let i = nums.length - 1; i >= 0; i--) {
        if (val === nums[i]) {
            nums.splice(i, 1)
        }
    }

    return nums.length
}