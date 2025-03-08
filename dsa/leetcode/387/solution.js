/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = (s) => {
    const chars = {}

    for (let i = 0; i < s.length; i++) {
        chars[s[i]] = (chars[s[i]] || 0) + 1
    }

    for (let j = 0; j < s.length; j++) {
        if (chars[s[j]] === 1) {
            return j
        }
    }

    return -1
};