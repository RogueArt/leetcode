/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = str => {
    const strLen = str.length

    let maxLen = 0
    for (let offset = 0; offset < strLen; offset++) {
        const hashMap = {}
        let count = 0
        
        for (let x = offset; x < strLen; x++) {
            const ch = str[x]

            // If we haven't seen this char before, add it to hashMap
            if (!hashMap[ch]) {
                hashMap[ch] = true
                count += 1
            }
                        
            // If char repeats, break
            else break
        }
        maxLen = Math.max(count, maxLen)
    }
    
    return maxLen
};

    /*
    const strLen = str.length
    
    // Go through all possible substrings of a string    
    for (let len = strLen; len > 0; len--) {
        for (let y = 0; y < strLen - len + 1; y++) {
            const substr = str.substring(y, y + len)
            
            // If no repeated chars, then this is the longest substring
            if (!hasRepeatedChars(substr)) return len
        }
    }
    
    return 0
    */

const hasRepeatedChars = (str) => {
    const hashMap = {}
    
    // Go through each char
    for (const char of str) {
        
        // If char not seen before, put it into hashmap
        if (!hashMap[char]) { hashMap[char] = true }
        
        // If char repeats, return true
        else { return true }
    }
    
    // Has only unique chars
    return false
}