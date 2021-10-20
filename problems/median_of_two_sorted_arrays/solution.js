/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
    // Concatenate and sort the arrays
    const combined = nums1.concat(nums2)
    combined.sort((a, b) => a - b)
    
    // Find the median
    return findMedian(combined)
};


// O(1)
function findMedian(nums) {
    const len = nums.length
    if (len % 2 === 1) return nums[(len - 1)/2] 
    else return (nums[len/2] + nums[len/2 - 1])/2
}

// [1, 2, 3] (3 - 1) -> 2 / 2 -> 1
// [1, 2, 3, 4] 4/2 -> 2 and 4/2 - 1 -> 1