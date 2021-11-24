/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums, val) {
    // Initialize a pivot at the end of array
    let pivot = nums.length
    for (let x = 0; x < pivot; x += 1) {
        if (nums[x] === val) {
            // Swap with pivot at end of array
            const temp = nums[pivot - 1]
            nums[pivot - 1] = nums[x]
            nums[x] = temp
            
            // Decrement pivot and x
            pivot -= 1
            x -= 1
        }
    }
    
    return pivot
};