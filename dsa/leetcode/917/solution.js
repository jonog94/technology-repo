/**
 * @param {string} s
 * @return {string}
 */
const reverseOnlyLetters = (s) => {
    const strArr = s.split('')
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let start = 0
    let end = strArr.length - 1

    while (start < end) {
        if (letters.indexOf(strArr[start]) !== -1 && letters.indexOf(strArr[end]) !== -1) {
            const temp = strArr[start]
            strArr[start] = strArr[end]
            strArr[end] = temp
            start++
            end--
        } else if (letters.indexOf(strArr[start]) === -1) {
            start++
        } else if (letters.indexOf(strArr[end]) === -1) {
            end--
        }
    }

    return strArr.join('')
}