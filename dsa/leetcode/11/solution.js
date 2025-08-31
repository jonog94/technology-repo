/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
    let maxWater = 0
    let left = 0
    let right = height.length - 1

    while (left < right) {
        const minHeight = Math.min(height[left], height[right])
        const width = right - left
        const water = minHeight * width

        if (water > maxWater) {
            maxWater = water
        }

        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }

    return maxWater
}