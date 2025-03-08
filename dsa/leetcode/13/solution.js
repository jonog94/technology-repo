/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
    const values = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let n = 0

    for (let i = 0; i < s.length; i++) {
        if (values[s[i]] < values[s[i + 1]]) {
            n += values[s[i + 1]] - values[s[i]]
            i++
        } else {
            n += values[s[i]]
        }
    }

    return n
}