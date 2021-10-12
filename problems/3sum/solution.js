/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
    // Populate the map with differences
    const map = {}
    for (const [idx, num] of nums.entries()) {
        map[num] = idx
    }
    
    const res = []
    const dups = {}
    
    // Iterate two items at a time
    for (let x = 0; x < nums.length; x += 1) {
        for (let y = x+1; y < nums.length; y += 1) {
            
            // Check if the difference exists, if it does, add it to res
            const diff = 0 - (nums[x] + nums[y])
            if (diff in map && x !== map[diff] && y !== map[diff]) {
                // Sort our triplet in ascending order
                const triplet = [nums[x], nums[y], diff].sort((a, b) => a - b)
                const csv = triplet.join(',')
                                
                // Only add it to res array if not duplicate
                if (!dups[csv]) {
                    dups[csv] = true
                    res.push([nums[x], nums[y], diff])
                }
            }
        }
    }
    
    // Return the result
    return res
};