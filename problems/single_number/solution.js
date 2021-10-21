/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
    return nums.reduce((num, single) => single ^ num, 0)
};