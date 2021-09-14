/**
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = (nums) => {
    // Get the minimum value of array
    const [min, max] = [Math.min(...nums), Math.max(...nums)]
    
    // Create hashmap from array
    let map = {}
    for (const num of nums)
        map[num] = true
    
    // Go through each, figure out which isn't in hashmap
    for (let x = 1; x < max; x += 1) {
        if (map[x] === undefined) return x
    }
    
    // If the max is <= 0, then return one
    if (max <= 0) return 1
    
    // Otherwise, it's next largest positve integer
    return max + 1
};