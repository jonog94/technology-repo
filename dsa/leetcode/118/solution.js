/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = (numRows) => {
    const rows = numRows > 1 ? [[1], [1,1]] : [[1]]

    for (let i = 2; i < numRows; i++) {
        rows[i] = []

        for (let j = 0; j < rows[i - 1].length; j++) {
            if (j === 0 || j === rows[i - 1].length - 1) {
                rows[i].push(1)
            }

            if (rows[i - 1][j] && rows[i - 1][j + 1]) {
                rows[i].push(rows[i - 1][j] + rows[i - 1][j + 1])
            }
        }
    }

    return rows
}