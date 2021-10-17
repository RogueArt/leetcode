/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
    // Trivial case: 0 or 1 elements in array
    if (nums.length <= 1) return nums.length
    
    // 
    let [curNum, curIndex] = [null, 0]
    
    // Iterate through array
    let index = 0
    while (index < nums.length) {
      // We've seen number, ignore it
        if (nums[index] !== curNum) {
            // Update curNum
            curNum = nums[index]

            // Swap it at the index
            const temp = nums[index]
            nums[index] = nums[curIndex]
            nums[curIndex] = temp

            // Update curIndex
            curIndex += 1
        }   
        
        // Always increment index
        index += 1
    }
    
    // curIndex is the size of new array
    return curIndex
};

// O(n) space, O(n) time solution
// Go through each, compare left with left+1
// If both same, push once
// Check the pushed array to see if it's already there
// If it's already there, skip, otherwise push/

// O(1) extra space (in-place), O(n) time solution
// 