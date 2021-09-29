/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
const isToeplitzMatrix = (matrix) => {
    // Go through columns
    for (let x = 0; x < matrix.length; x += 1) {
        if (!isDiagonalSame(matrix, x, 0)) return false
    }
    
    // Go through rows
    for (let y = 1; y < matrix[0].length; y += 1) {
        if (!isDiagonalSame(matrix, 0, y)) return false
    }
 
    return true
};

// Check if diagonal of matrix is same
function isDiagonalSame(matrix, x, y) {
    const [m, n] = [matrix.length, matrix[0].length]
    const firstVal = matrix[x][y]
    
    while (!isOutOfBounds(x, y, m, n)) {
        // Check if values match 
        if (matrix[x][y] !== firstVal) return false
        
        x += 1
        y += 1
    }
    return true
}

// Checks if the coordinate is out of bounds
function isOutOfBounds(x, y, m, n) {
    const outOfX = x < 0 || x >= m 
    const outOfY = y < 0 || y >= n
    
    return outOfX || outOfY
}