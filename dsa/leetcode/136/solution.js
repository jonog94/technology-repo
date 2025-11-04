/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
    let num = 0

    for (let i = 0; i < nums.length; i++) {
        num ^= nums[i]
    }

    return num
}