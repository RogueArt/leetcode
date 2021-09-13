/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = (matrix) => {
    let [rowBegin, rowEnd] = [0, matrix.length - 1]
    let [colBegin, colEnd] = [0, matrix[0].length - 1]
    
    const res = [] 
    while (rowBegin <= rowEnd && colBegin <= colEnd) {
        // Traverse right
        for (let x = colBegin; x <= colEnd; x += 1) {
            res.push(matrix[rowBegin][x])
        }
        rowBegin++
        
        // Traverse down
        for (let x = rowBegin; x <= rowEnd; x += 1) {
            res.push(matrix[x][colEnd])
        }
        colEnd--
        
        if (rowBegin <= rowEnd) {
            // Traverse left
            for (let y = colEnd; y >= colBegin; y -= 1) {
                res.push(matrix[rowEnd][y])
            }
            rowEnd--
        }
        
        if (colBegin <= colEnd) {
            // Traverse up
            for (let x = rowEnd; x >= rowBegin; x -= 1) {
                res.push(matrix[x][colBegin])
            }
            colBegin++   
        }
    }

    return res
};