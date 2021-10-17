/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const seen = {}
    // Add numbers that were seen in nums1 to the map
    for (const num of nums1) {
        // Haven't seen the number
        seen[num] = false
    }
    
    // If numbers are also in num2, add them to intersection ONCE
    const intersections = []
    for (const num of nums2) {
        if (num in seen && seen[num] === false) {
            seen[num] = true
            intersections.push(num)
        }
    }
    return intersections
};