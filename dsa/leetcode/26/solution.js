/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
    const matches = []

    for (let i = 0; i < nums.length; i++) {
        if (!matches.includes(nums[i])) {
            matches.push(nums[i])
        } else {
            nums.splice(i, 1)
            i--
        }
    }

    return nums.length
};