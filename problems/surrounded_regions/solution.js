/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function solve(board) {
    const [n, m] = [board.length, board[0].length]
    
    // Start our DFS's on the top and bottom row
    for (let x = 0; x < board.length; x += 1) {
        if (board[x][0] === 'O') dfs(board, x, 0, 'Z')
        if (board[x][m-1] === 'O') dfs(board, x, m - 1, 'Z')
    }
    
    // Do our DFS's on the left and right columns
    for (let y = 1; y < (m - 1); y += 1) {
        if (board[0][y] === 'O') dfs(board, 0, y, 'Z')
        if (board[n-1][y] === 'O') dfs(board, n-1, y, 'Z')
    }
    
    // Set all Z's to O and set all O's to X
    for (let x = 0; x < n; x += 1) {
        for (let y = 0; y < m; y += 1) {
            if (board[x][y] === 'Z') board[x][y] = 'O'
            else if (board[x][y] === 'O') board[x][y] = 'X'
        }
    }
    
    return board
};

const neighbors = [[0, 1], [1, 0], [-1, 0], [0, -1]]
function dfs(board, x, y, setVal) {
    board[x][y] = setVal
    
    for (const neighbor of neighbors) {
        const [newX, newY] = [neighbor[0] + x, neighbor[1] + y]
    
        if (newX < 0 || newX >= board.length) continue
        if (newY < 0 || newY >= board[0].length) continue
        if (board[newX][newY] === 'O') dfs(board, newX, newY, setVal)
    }
}