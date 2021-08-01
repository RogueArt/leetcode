/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = (matrix) => {
    const rowsSet = new Set()
    const colsSet = new Set()
    
    const m = matrix.length // # of rows
    const n = matrix[0].length // # of columns
    
    
    console.log("m and n:", m, n)
    
    // Go through each element in matrix
    // Push row and column where it finds a 0
    for (let x = 0; x < m; x += 1) {
        for (let y = 0; y < n; y += 1) {
            if (matrix[x][y] === 0) {
                rowsSet.add(x)
                colsSet.add(y)
            }
        }
    }
    
    // Go through list of rows marked as zero, set each row to zero
    for (const [index, row] of rowsSet.entries()) {
        for (let y = 0; y < n; y += 1) {
            matrix[row][y] = 0
        }
    }
    
    // Go through list of cols marked as zero, set each col to zero
    for (const [index, col] of colsSet.entries()) {
        for (let x = 0; x < m; x += 1) {
            matrix[x][col] = 0
        }
    }
};