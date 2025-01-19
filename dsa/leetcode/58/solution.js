/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (s) => {
    let matching = false
    let word = ''

    for (let i = 0; i < s.length; i++) {
        const c = s[i]

        if (c !== ' ' && !matching) {
            word = c
            matching = true
        } else if (c !== ' ' && matching) {
            word = word + c
        } else if (c === ' ') {
            matching = false
        }
    }

    return word.length
}