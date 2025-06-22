/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
    if (s.length !== t.length) {
        return false
    }

    const charMap1 = {}
    const charMap2 = {}

    for (let i = 0; i < s.length; i++) {
        charMap1[s[i]] = charMap1[s[i]] ? ++charMap1[s[i]] : 1
    }

    for (let i = 0; i < t.length; i++) {
        charMap2[t[i]] = charMap2[t[i]] ? ++charMap2[t[i]] : 1
    }

    const keys1 = Object.keys(charMap1)
    const keys2 = Object.keys(charMap2)

    if (keys1.length !== keys2.length) {
        return false
    }

    for (let i = 0; i < keys1.length; i++) {
        if (charMap1[keys1[i]] !== charMap2[keys1[i]]) {
            return false
        }
    }

    return true
}