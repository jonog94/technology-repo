/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
    let num = x
    let reversedNum = 0

    if (x < 0) {
        return false
    }

    while(num) {
        const lastNum = num % 10

        reversedNum = Math.floor((reversedNum * 10) + lastNum)

        num = Math.floor(num / 10)
    }

    return x === reversedNum
}