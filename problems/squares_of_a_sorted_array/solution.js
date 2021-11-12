/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = (nums) => {
    const result = new Array(nums.length)
    
    let [left, right] = [0, nums.length - 1]
    for (let x = nums.length - 1; x >= 0; x--) {
        const leftNum = nums[left]
        const rightNum = nums[right]
        
        // We see square on right is bigger than left
        // Add it to the end of the array
        // Move pointer closer to middle
        if (Math.abs(leftNum) < Math.abs(rightNum)) {
            result[x] = rightNum * rightNum
            right -= 1
        }
        
        // Otherwise left num is same or bigger than right
        // Add it to the end of the array
        // Move pointer closer to middle
        else {
            result[x] = leftNum * leftNum
            left += 1
        }
    }
    return result
};

// [0, 1, 2, 3]