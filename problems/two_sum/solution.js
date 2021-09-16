/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    // Build a hashmap from the numbers in the array
    let map = {}
    for (const [idx, num] of nums.entries()) {
        map[num] = idx
    }
    
    // Go through each number in array
    for (const [idx, num] of nums.entries()) {
        // Check if the difference exists in hashmap
        const diff = target - num
        
        // If it does, return it
        if (map[diff] !== undefined && map[diff] !== idx) return [idx, map[diff]]
    }
};