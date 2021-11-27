/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

function searchMatrix(matrix, target) {
    const [m, n] = [matrix.length, matrix[0].length]
    let [left, right] = [0, (m * n) - 1]
    
    while (left <= right) {
        // Get the middle point of where we're searching
        const mid = left + Math.floor((right - left)/2)
        
        // Convert it to a row and column
        const [row, col] = flatToRowColIdx(mid, n)        
        
        // Found the value successfully
        if (target === matrix[row][col]) return true
    
        // If middle is bigger, shrink search space to left half
        else if (matrix[row][col] > target) right = mid - 1
        
        // If middle is smaller than target, then shrink space to right half
        else left = mid + 1
    }
    
    // Broke out of loop, couldn't find it
    return false
};

// Takes in a flat point, converts it to index
function flatToRowColIdx(flatPoint, n) {
    const row = Math.floor(flatPoint / n)
    const col = flatPoint % n
    
    return [row, col]
}

// 0 -> (0, 0)
// 1 -> (1, 0)
