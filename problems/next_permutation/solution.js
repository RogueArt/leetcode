/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums) {
    // 1. Find the first decreasing element
    // O(N) time and O(1) space complexity
    let firstDecreaseIdx = -1
    for (let x = nums.length; x > 0; x -= 1) {
        // If we find left to be smaller than right, found it
        if (nums[x - 1] < nums[x]) {
            firstDecreaseIdx = x - 1
            break
        } 
    }
    
    // If it's already in the last permutation, then reverse it and return
    if (firstDecreaseIdx === -1) return nums.reverse()
    
    // 2. Iterate forwards from this index
    // O(N) time and O(1) space complexity
    const target = nums[firstDecreaseIdx]
    let rollingSmallest = Infinity
    let rollingSmallestIdx = -1
    
    for (let x = firstDecreaseIdx + 1; x < nums.length; x += 1) {
        // Find the smallest number bigger than target
        if (nums[x] > target && nums[x] <= rollingSmallest) {
            rollingSmallest = nums[x]
            rollingSmallestIdx = x
        }
    }
        
    // 3. Swap it with the found number
    const temp = nums[rollingSmallestIdx]
    nums[rollingSmallestIdx] = nums[firstDecreaseIdx]
    nums[firstDecreaseIdx] = temp

    
    // 4. Reverse everything after firstDecreaseIndex
    // Do this because turn it from last to first permutation
    let [left, right] = [firstDecreaseIdx + 1, nums.length - 1]
    while (left <= right) {
        const temp = nums[left]
        nums[left] = nums[right]
        nums[right] = temp
        
        left += 1
        right -= 1
    }
    
    
    return nums
};