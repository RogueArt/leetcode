/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
    // Use a two pointer approach
    // Two pointers on the leftmost and rightmost edge of array
    let [left, right] = [0, nums.length - 1]
    
    while (left <= right) {
        // Get the midpoint and the actual value associated with it
        const mid = left + Math.floor((right - left) / 2)
        const midVal = nums[mid]
        
        // Three cases:
        // Case 1: If midval is same as what we're looking for
        // Return the value since we're done searching
        if (midVal === target) return mid
        
        // Case 2: If midval is less than what we're looking for
        // Reduce the search space to the right half of the array
        else if (midVal < target) left = mid + 1
        
        // Case 3: If midval is more than what we're looking for
        // Reduce the search space to the left half of the array
        else right = mid - 1
    }
    
    // Could not find the value in the array, return sentinel value
    return -1
};