/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const previousValues = {}
    const len = nums.length
    for (let x = 0; x < len; x++) {
        const val = target - nums[x]
        const oldIndex = previousValues[val]
        if (oldIndex != null) {
           return [oldIndex, x]
        }
        else {
            previousValues[nums[x]] = x
        }
    }
};