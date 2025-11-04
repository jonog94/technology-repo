/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n) => {
    if (n <= 2) {
        return n
    }

    let first = 1
    let second = 2
    let third = first + second

    for (let i = 3; i <= n; i++) {
        third = first + second
        first = second
        second = third
    }

    return third
}