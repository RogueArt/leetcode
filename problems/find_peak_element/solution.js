/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = (nums) => {
    if (nums.length === 1) return 0
    
    for (let x = 0; x < nums.length - 1; x += 1) {
        if (nums[x] > nums[x + 1]) return x
    }
    
    return nums.length - 1
};