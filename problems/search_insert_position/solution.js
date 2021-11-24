/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target) {
    let [left, right] = [0, nums.length - 1]
    
    // Bigger than any of the values in nums, so max index
    if (target > nums[right]) return nums.length
    
    // Smaller than any of the values in nums, so min index
    if (target < nums[left]) return 0
    
    while (left <= right) {
        const mid = left + Math.floor((right - left)/2)
        
        // If val at mid is same as target, then return mid
        if (nums[mid] === target) return mid
        
        // Should be between the two values
        if (nums[mid] < target && nums[mid + 1] > target) return mid + 1
        
        // If value is bigger, reduce search space to left side
        if (nums[mid] > target) right = mid - 1
        
        // If value is smaller, reduce search space to left half
        if (nums[mid] < target) left = mid + 1
    }
};