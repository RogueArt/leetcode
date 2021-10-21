/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
const canBeEqual = (target, arr) => {
    // Build hashmap of frequencies
    const frequency = {}
    for (const num of target) {
        
        if (num in frequency) frequency[num] += 1
        else frequency[num] = 1
    }
    
    // Iterate through numbers of arr
    for (const num of arr) {
        // Arr has some number not in target
        if (num in frequency === false) return false
        
        // Decrease frequency by one
        frequency[num] -= 1 
        
        // If arr has more of a value then it's false
        if (frequency[num] < 0) return false
    }
    
    // Arrays have same frequencies of values
    return true
};