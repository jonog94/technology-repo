/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
    const searchIndex = (start, end) => {
        if (start > end) {
            if (nums[start - 1] > target) {
                return start - 1
            } else {
                return start
            }
        }

        const i = Math.floor((start + end) / 2)

        if (nums[i] === target) {
            return i
        } else {
            return nums[i] < target ? searchIndex(i + 1, end) : searchIndex(start, i - 1)
        }
    }

    return searchIndex(0, nums.length - 1)
}