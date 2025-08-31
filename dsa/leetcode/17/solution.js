/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = (digits) => {
    const numbers = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    }

    if (!digits) {
        return []
    }

    let combinations = [...numbers[digits[0]]]

    for (let i = 1; i < digits.length; i++) {
        const digit = digits[i]
        const letters = numbers[digit]

        const arr = []

        for (let k = 0; k < combinations.length; k++) {
            for (let j = 0; j < letters.length; j++) {
                arr.push(combinations[k] + letters[j])
            }
        }

        combinations = arr
    }

    return combinations
}