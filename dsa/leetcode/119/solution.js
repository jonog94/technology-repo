/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = (rowIndex) => {
    const rows = [[1]]

    for (let i = 0; i < rowIndex; i++) {
        const row = []

        row.push(1)

        const cr = rows[i]

        for(let j = 0; j < cr.length; j++) {
            if (cr[j] && cr[j + 1]) {
                row.push(cr[j] + cr[j + 1])
            }
        }

        row.push(1)
        rows.push(row)
    }

    return rows[rowIndex]
}