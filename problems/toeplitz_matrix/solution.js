/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
function diagonalIsEqual(matrix, startX, startY) {
    const num = matrix[startX][startY]
    while (startX < matrix.length && startY < matrix[0].length) {
        if (num !== matrix[startX][startY]) return false
        startX += 1
        startY += 1
    }
    
    return true
}

const isToeplitzMatrix = (matrix) => {
    // Traverse from bottom left to top left
    for (let y = matrix[0].length - 1; y >= 0; y -= 1) {
        // Check Toeplitz
        if (!diagonalIsEqual(matrix, 0, y)) return false
    }
    
    // Traverse from top left to top right
    for (let x = 0; x < matrix.length; x += 1) {
        // Check Toeplitz
        if (!diagonalIsEqual(matrix, x, 0)) return false
    }
    
    return true
};