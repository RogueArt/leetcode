/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (numbers, target) => {
    let [left, right] = [0, numbers.length - 1]
    
    // Go until left pointer goes right of right pointer
    while (left <= right) {
        // Get left and right sums
        const sum = numbers[left] + numbers[right]
        
        // If we found target, return indices
        if (sum === target) return [left + 1, right + 1]
        
        // If sum is less than target, increase left -> sum goes up
        else if (sum < target) left += 1
        
        // If sum is more than target, decrease right -> sum goes down
        else right -= 1
    }

    // Should never go here
};