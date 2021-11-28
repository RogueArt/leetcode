/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
const neighbors = [[1, 0], [0, 1], [-1, 0], [0, -1]]
function floodFill(image, sr, sc, newColor) {
    const original = image[sr][sc]
    if (original !== newColor) DFSFloodFill(original, image, sr, sc, newColor)
    return image
};

function DFSFloodFill(original, image, x, y, newColor) {
    // Set image at coordinate to new color
    image[x][y] = newColor
    
    // Perform DFS on all of the neighbors
    for (const neighbor of neighbors) {
        const newX = x + neighbor[0]
        const newY = y + neighbor[1]
        
        // Check if going out of bounds
        if (newX < 0 || newX >= image.length) continue
        if (newY < 0 || newY >= image[0].length) continue
        
        if (image[newX][newY] === original) DFSFloodFill(original, image, newX, newY, newColor)
    }
}