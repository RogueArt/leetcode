/**
 * @param {number} length
 * @param {number[][]} updates
 * @return {number[]}
 */
var getModifiedArray = function(length, updates) {
    const newArr = new Array(length).fill(0)
    
    for (const [low, high, val] of updates) {
        for (let x = low; x <= high; x += 1) {
            newArr[x] += val
        }
    }
    return newArr
};