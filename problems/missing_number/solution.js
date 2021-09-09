/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // We can calculate the sum of numbers 0..n inclusive
    const len = nums.length
    let sum = (len + 1)/2 * len
    
    // Subtract all numbers in nums
    for (const num of nums) {
        sum -= num
    }
    
    // Whatever remains is the missing number
    return sum
};