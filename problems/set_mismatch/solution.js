/**
 * @param {number[]} nums
 * @return {number[]}
 */
function findErrorNums(nums) {
    const boolArr = new Array(nums.length).fill(false)
    const res = []
    
    // Get the duplicate
    for (const num of nums) {
        const idx = num - 1
        // Check if we already saw this number
        // If we saw it before, push it
        if (boolArr[idx]) res.push(num) 
            
        // Mark it as seen if we haven't seen it yet
        else boolArr[idx] = true
    }
    
    // Add the missing number
    res.push(boolArr.indexOf(false) + 1)
    
    return res
};