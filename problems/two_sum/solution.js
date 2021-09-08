/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    // Create an object from the array where
    // (key, value) = (num, index)
    let diffs = {}
    for (const [idx, num] of nums.entries()) {
        diffs[num] = idx
    }
    
    // Go through each number
    // Try to find "missing" number in the diffs hashmap
    for (const [idx, num] of nums.entries()) {
        const diff = target - num
        const diffIdx = diffs[diff]
        
        if (diffIdx && idx !== diffIdx) {
            return [diffIdx, idx] 
        }
    }
};