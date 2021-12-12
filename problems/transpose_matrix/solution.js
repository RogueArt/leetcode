/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
function transpose(matrix) {
    // Create a 2D n x m array where we store our result
    const res = new Array(matrix[0].length).fill(null).map(e => new Array(matrix.length).fill(0))
    
    // Perform a row-major traversal over matrix
    for (let x = 0; x < matrix.length; x += 1) {
        for (let y = 0; y < matrix[0].length; y += 1) {
            res[y][x] = matrix[x][y]
        }
    }
    
    return res
};


/*
[1, 2, 3]
[4, 5, 6]


*/