/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = (a, b) => {
    let str = ''
    let carry = false

    const maxLen = Math.max(a.length, b.length)

    a = a.padStart(maxLen, "0")
    b = b.padStart(maxLen, "0")

    for (let i = a.length - 1; i >= 0; i--) {
        if (carry) {
            if (a[i] === '1' && b[i] === '1') {
                str = '1' + str
            } else if (a[i] === '1' || b[i] === '1') {
                str = '0' + str
            } else {
                str = '1' + str
                carry = false
            }
        } else {
            if (a[i] === '1' && b[i] === '1') {
                str = '0' + str
                carry = true
            } else if (a[i] === '1' || b[i] === '1') {
                str = '1' + str
            } else {
                str = '0' + str
            }
        }
    }

    if (carry) {
        str = '1' + str
    }

    return str
}