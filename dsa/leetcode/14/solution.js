/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
    const str = strs[0]
    let prefix = ''

    for(let i = 0; i < str.length; i++) {
        let match = true

        for (let j = 0; j < strs.length - 1; j++) {
            if (strs[j][i] !== strs[j + 1][i]) {
                match = false
            }
        }

        if (match) {
            prefix+= str[i]
        } else {
            break;
        }
    }

    return prefix
}