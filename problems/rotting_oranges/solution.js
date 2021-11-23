/**
 * @param {number[][]} grid
 * @return {number}
 */
const neighbors = [[0, 1], [1, 0], [-1, 0], [0, -1]]
function orangesRotting(grid) {
    // Create a queue for BFS on grid  
    const queue = []
    
    // Enqueue all rotting oranges
    for (let x = 0; x < grid.length; x += 1) {
        for (let y = 0; y < grid[0].length; y += 1) {
            if (grid[x][y] === 2) queue.push({ x, y, time: 0 })
        }
    }
    
    // Perform BFS on all of the rotting oranges we queued up
    let maxTime = 0
    while (queue.length > 0) {
        const current = queue.shift()
        
        for (const neighbor of neighbors) {
            const [newX, newY] = [current.x + neighbor[0], current.y + neighbor[1]]
            
            // Check the bounds of the grid
            if (newX < 0 || newX >= grid.length) continue
            if (newY < 0 || newY >= grid[0].length) continue
            
            // Only enqueue if current is not OOB and is valid orange
            if (grid[newX][newY] === 1) {
                queue.push({ x: newX, y: newY, time: current.time + 1 })
                
                // Rot the orange
                grid[newX][newY] = 2
                
                // Set max time
                maxTime = Math.max(current.time + 1, maxTime)
            }
        }
    }
        
    // If fresh orange is left, then impossible
    if (freshOrangeLeft(grid)) return -1
    
    // Otherwise return the max time it took
    return maxTime
};

// Check if there will be a fresh orange at the end
function freshOrangeLeft(grid) {
    for (let x = 0; x < grid.length; x += 1) {
        for (let y = 0; y < grid[0].length; y += 1) {
            // Check if it's a fresh orange
            if (grid[x][y] === 1) return true
        }
    }
    return false
}