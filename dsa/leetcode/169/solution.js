/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
    const counts = {}

    for (let i = 0; i < nums.length; i++) {
        counts[nums[i]] = 1 + (counts[nums[i]] || 0)
    }

    const max = Object.entries(counts).reduce((m, c) => {
        return m[1] > c[1] ? m : c
    })

    return +max[0]
}