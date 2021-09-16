/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
    // Use sliding window approach
    let [left, right, maxLen] = [0, 0, 0]
    
    const len = s.length
    const map = {}
    while (right < len) {
        const leftChar = s[left]
        const rightChar = s[right]
        
        // Haven't seen character before
        if (!map[rightChar]) {
            // Grow the window
            right += 1
            maxLen = Math.max(right - left, maxLen)           
            
            // Add character at right to hashmap
            map[rightChar] = true
        }
        
        // Character is repeated
        else {
            // Shrink window by one to the left
            left += 1
            
            // Set left character as unseen
            map[leftChar] = false
        }
    }
    
    return maxLen
};