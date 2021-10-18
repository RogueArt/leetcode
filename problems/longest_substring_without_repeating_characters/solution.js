/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
    let [left, right] = [0, 0]
    
    let maxLen = 0
    const frequency = {}
    while (right < s.length) {
        const rCh = s[right]
        
        // Make sure character exists in hashmap before incrementing
        if (rCh in frequency === false) frequency[rCh] = 0
        
        // Increment frequency
        frequency[rCh] += 1
        
        // If we have more than 1 char here
        while (frequency[rCh] > 1) {
            const lCh = s[left]
            
            left += 1            
            frequency[lCh] -= 1
        }
        
        // Get the maximum length between strings
        maxLen = Math.max(maxLen, right - left + 1)
        
        // Always move one to the right
        right += 1
    }
    
    return maxLen
};

// abca
// baca
// aca
// ca