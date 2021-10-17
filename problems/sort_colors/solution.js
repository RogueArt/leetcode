/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
   let [left, right] = [0, nums.length - 1]
   
   for (let index = left; index <= right; index += 1) {
       switch (nums[index]) {
           // Swap 0's to the front
           case 0: 
               [nums[left], nums[index]] = [nums[index], nums[left]]
               left += 1
               break
           // Do nothing for 1's
           case 1: break
           // Swap 2's to the back
           case 2: 
               [nums[right], nums[index]] = [nums[index], nums[right]]
               right -= 1
               
               // Check if we swapped in a 0
               index--
               break
           default: break
       }
   }
    
    return nums
};

// [2, 1, 2, 0]
// [0, 1, 2]