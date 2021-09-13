/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = (board, word) => {
    const [m, n] = [board.length, board[0].length]
    const firstChar = word.charAt(0)
    
    // Go through each element
    for (let x = 0; x < m; x += 1) {
        for (let y = 0; y < n; y += 1) {
            // If first letter matches, use DFS to find rest
            if (board[x][y] === firstChar && dfs(board, word, x, y, 0)) {
                return true
            }
        }
    }
    
    // Could not find the word
    return false
};

function dfs(board, word, x, y, charCount) {
    // If number of chars found matches word length, then we found word
    if (charCount === word.length) return true
    
    // Get target character, set current char to blank
    const targetChar = word.charAt(charCount)
    
    // Return false if outside of rows
    if (x < 0 || x >= board.length) return false
    // Return false if outside of columns
    if (y < 0 || y >= board[x].length) return false
    // Return false if not target character
    if (board[x][y] !== targetChar) return false
    
     board[x][y] = ' '
    
    // See if word was found
    const foundWord = dfs(board, word, x-1, y, charCount+1) ||
                      dfs(board, word, x, y-1, charCount+1) ||
                      dfs(board, word, x+1, y, charCount+1) ||
                      dfs(board, word, x, y+1, charCount+1)

    // Restore character to array
    board[x][y] = targetChar
    
    // Could not find enough chars to complete word
    return foundWord
}