/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
    let [left, right, maxArea] = [0, height.length - 1, 0]
    
    while (left < right) {
        // Calculate and update the area each time
        const w = right - left
        const h = Math.min(height[right], height[left])
        maxArea = Math.max(w * h, maxArea)
        
        // Increment left if value at right bigger than left
        if (height[right] > height[left]) left += 1
        
        // Otherwise, decrement right
        else right -= 1
    }
    
    return maxArea
};