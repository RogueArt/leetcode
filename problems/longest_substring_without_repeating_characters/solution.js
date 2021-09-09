/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
    const len = s.length
    if (len === 0 || len === 1) return len
    
    let [left, right, maxLen] = [0, 0, 1]    
    let seenChars = {}
    
    // Used for O(1) tracking length
    seenChars.length = 0
    
    // Make sure pointer doesn't go outside of array
    while (right < s.length) {
        const [leftChar, rightChar] = [s[left], s[right]]

        // Seen chars hasn't seen the right char, so add it
        if (!seenChars[rightChar]) {
            // Add right char to hashmap, update size
            seenChars[rightChar] = true
            seenChars.length += 1
            
            // Move right pointer more to right           
            right += 1
            
            // Set max to whatever hashmap size is
            maxLen = Math.max(seenChars.length, maxLen)
        }
        
        // Already saw the character
        else {
            // Set character in object as unseen, reduce length
            seenChars[leftChar] = false
            seenChars.length -= 1
            
            // Move left pointer more to right
            left += 1
        }       
    }
    
    return maxLen
};