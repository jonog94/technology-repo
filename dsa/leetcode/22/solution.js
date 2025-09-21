/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
    const combinations = []

    const generateCombinations = (left, right, str = '') => {
        if ((left === right) && (str.length === n * 2)) {
            combinations.push(str)
        } else {
            if (left < n) {
                generateCombinations(left + 1, right, str + '(')
            }

            if (left > right) {
                generateCombinations(left, right + 1, str + ')')
            }
        }
    }

    generateCombinations(0, 0)

    return combinations
}