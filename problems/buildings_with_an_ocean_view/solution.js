/**
 * @param {number[]} heights
 * @return {number[]}
 */
const findBuildings = (heights) => {
    const tallest = new Array(heights.length).fill(0)
    
    // Iterate tallest in reverse order
    tallest[tallest.length - 1] = heights[heights.length - 1]
    for (let x = tallest.length - 2; x >= 0; x -= 1) {
        tallest[x] = Math.max(heights[x+1], tallest[x+1])
    }

    // Store answers in a stack
    const res = []
    for (let x = 0; x < heights.length; x += 1) {
        if (heights[x] > tallest[x]) res.push(x)
    }
    
    // Last building can always see it
    res.push(heights.length - 1)

    return res
};

// Naive solution:
// For each building, check if there's one that's taller in front of it
// If there isn't, push index to the ArrayList

// Keep track of tallest building so far
// Max(2, 3, 1) = 3
// Max(3, 1) = 2
// Max(1) = 1