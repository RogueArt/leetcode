/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
    let [left, right] = [0, nums.length - 1]
    
    // Go until left pointer is right of right pointer
    while (left <= right) {
        // Get the mid point and middle val
        const mid = left + Math.floor((right - left)/2)
        const midVal = nums[mid]
        
        // Reduce search space by half each time
        if (midVal === target) return mid
        if (midVal < target) left = mid + 1
        if (midVal > target) right = mid - 1
    }
    
    // Value does not exist
    return -1
};