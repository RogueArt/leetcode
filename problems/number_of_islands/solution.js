/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = (grid) => {
    const [m, n] = [grid.length, grid[0].length]
    
    let numIslands = 0
    for (let x = 0; x < m; x += 1) {
        for (let y = 0; y < n; y += 1) {
            if (grid[x][y] === '1') {
                numIslands += 1
                sinkIsland(grid, x, y)
            }
        }
    }
    
    return numIslands
};

function isInvalidIndex(grid, x, y) {    
    return (x < 0 || x >= grid.length) || (y < 0 || y >= grid[0].length) || grid[x][y] === '0'
}

function sinkIsland(grid, x, y) {
    if (isInvalidIndex(grid, x, y)) return
    
    // Sink the island by setting island to 0's
    grid[x][y] = '0'
    sinkIsland(grid, x + 1, y)
    sinkIsland(grid, x - 1, y)
    sinkIsland(grid, x, y + 1)
    sinkIsland(grid, x, y - 1)
}