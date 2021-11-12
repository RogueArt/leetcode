/**
 * @param {number[][]} mat
 * @return {number[]}
 */
function findDiagonalOrder(mat) {
    if (mat.length === 0) return [[]]
    
    const [m, n] = [mat.length, mat[0].length]
    let [r, c] = [0, 0]
    
    const res = new Array(m * n).fill(0)
    
    for (let x = 0; x < res.length; x += 1) {
        res[x] = mat[r][c]

        // Go from bottom left towards the top right
        if ((r + c) % 2 === 0) {
            // If column is max, then increment row
            if (c === n - 1) r += 1

            // If row is zero (max), then increment column
            else if (r === 0) c += 1

            // Otherwise, decrease rows, increase column
            // Aka move up and move right
            else {
                r -= 1
                c += 1
            }
         }

        // Go from top right to bottom left
        else {
            // If column is min, move towards bottom
            if (r === m - 1) c += 1

            // If row is max, move towards right
            else if (c === 0) r += 1

            // Otherwise, increase rows, decrease column
            // Aka move down and to the left
            else {
                r += 1
                c -= 1
            }
        }
    }
    
    return res
};