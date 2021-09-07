/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
    const seenNums = {}
    for (const num of nums) {
        if (num in seenNums === false) {
            seenNums[num] = true
        }
        else return true
    }
    return false
};