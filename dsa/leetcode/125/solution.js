/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
    let trimmedStr = ''

    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        let code = char.charCodeAt(0)

        // Check if char is a digit (0-9), uppercase letter (A-Z), or lowercase letter (a-z)
        let isAlphanumeric =
            (code >= 48 && code <= 57) ||  // 0–9
            (code >= 65 && code <= 90) ||  // A–Z
            (code >= 97 && code <= 122)    // a–z

        if (isAlphanumeric) {
            trimmedStr+= char.toLowerCase()
        }
    }

    const reversedArr = trimmedStr.split('')

    for (let i = 0; i < reversedArr.length / 2; i++) {
        const temp = reversedArr[i]
        reversedArr[i] = reversedArr[reversedArr.length - 1 - i]
        reversedArr[reversedArr.length - 1 - i] = temp
    }

    const reversedStr = reversedArr.join('')

    return reversedStr === trimmedStr
}