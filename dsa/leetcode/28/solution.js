/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
    for (let i = 0; i < haystack.length; i++) {
        if (needle[0] === haystack[i]) {
            let needleIndex = 0

            for(let j = i; j < haystack.length; j++) {
                if (needle[needleIndex] === haystack[j]) {
                    if (needleIndex + 1 === needle.length) {
                        return i
                    } else {
                        needleIndex++
                    }
                } else {
                    break;
                }
            }
        }
    }

    return -1
}