/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = (nums, k) => {    
    const sumMap = { '0': 1 }
    let [sum, count] = [0, 0]
    
    // Go through each number
    for (const num of nums) {
        // Get a rolling sum
        sum += num
        const diff = sum - k
        
        // If sum - k is in map, then found subarray
        if (diff in sumMap) count += sumMap[diff]
        
        // Keep track of how many times we see sum
        if (sum in sumMap) sumMap[sum] += 1
        else sumMap[sum] = 1
    }
    
    return count
};
