/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (nums1, nums2) => {
    // Make it so that we construct hashmap of smaller
    if (nums1.length > nums2.length)
        return intersect(nums2, nums1)
    
    const map = {}
    // Create a frequency hashmap of numbers
    for (const num of nums1) {
        if (num in map === false) map[num] = 1
        else map[num] += 1
    }
    
    const res = []
    // Go through each number in nums2
    for (const num of nums2) {
        // Add number until its frequency hits 0
        if (num in map && map[num] > 0) {
            res.push(num)
            map[num]--
        }
    }

    return res
};