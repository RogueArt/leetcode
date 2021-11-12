/**
 * @param {character[][]} grid
 * @return {number}
 */
function numIslands(grid) {
    let numIslands = 0
    for (let x = 0; x < grid.length; x += 1) {
        for (let y = 0; y < grid[0].length; y += 1) {
            if (grid[x][y] === '1') {
                sinkIsland(grid, x, y)
                numIslands += 1
            }
        }
    }
    return numIslands
};

// Go through neighbors, sink islands as we see them
const neighbors = [[1, 0], [0, 1], [-1, 0], [0, -1]]
function sinkIsland(grid, x, y) {
    if (grid[x][y] !== '1') return
    
    // Mark the current as visited
    grid[x][y] = "0"
    
    // Proceed to explore the rest of the island
    for (const neighbor of neighbors) {
        const newX = neighbor[0] + x
        const newY = neighbor[1] + y
        
        if (!isOOB(grid, newX, newY)) sinkIsland(grid, newX, newY)
    }
}
    
// Check if the coordinate is out of bounds of grid
function isOOB(grid, x, y) {
    if (x > grid.length - 1 || x < 0) return true
    if (y > grid[0].length - 1 || y < 0) return true
    
    return false
}