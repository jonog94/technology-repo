/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = (digits) => {
    const arr = []

    let add = true

    for (let i = digits.length - 1; i >= 0; i--) {
        const n = digits[i]

        if (add && (n + 1) > 9) {
            arr.unshift(0)

            if (i === 0) {
                arr.unshift(1)
            }
        } else if (add) {
            arr.unshift(n + 1)
            add = false
        } else {
            arr.unshift(n)
        }
    }

    return arr
}