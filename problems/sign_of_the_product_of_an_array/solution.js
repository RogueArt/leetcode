/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    // Go through array, count number of negatives
    let negativeCount = 0
    for (const num of nums) {
        // Product will be 0 if we see a zero anywhere
        if (num === 0) return 0
        else if (num < 0) negativeCount++
    }
    
    // Odd number of negatives, so negative
    if (negativeCount % 2 === 1) return -1
    
    // Even number of negatives gives positive
    else return 1
};