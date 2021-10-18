/**
 * @param {number[]} heights
 * @return {number[]}
 */
const findBuildings = (heights) => {
    const len = heights.length
    let tallest = heights[len - 1]
    
    // Last value can always see ocean
    const res = [len-1]
    
    // Iterate in backwards order
    for (let x = len - 2; x >= 0; x--) {
        if (heights[x] > tallest) res.push(x) 
        tallest = Math.max(tallest, heights[x])
    }
    
    // Reverse array so it's in increasing order
    return res.reverse()
};

// Naive solution:
// For each building, check if there's one that's taller in front of it
// If there isn't, push index to the ArrayList

// Keep track of tallest building so far
// Max(2, 3, 1) = 3
// Max(3, 1) = 2
// Max(1) = 1