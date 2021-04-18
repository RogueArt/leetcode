/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
    const len = s.length
    if (len === 1) return s
    
    // Store the longest substr here
    let longestPalSubstr = ''
    
    // Sweep left to right, with offset
    for (let offset = 0; offset < len; offset += 1) {
        // let accumulatedStr = s[offset]
        
        // Get the character we're beginning with
        const startChar = s[offset]
        
        // Sweep through the string
        for (let i = offset+1; i < len; i += 1) {
            if (s[i] === startChar) {
                const substr = s.substring(offset, i+1)
                if (isPalindrome(substr) && substr.length > longestPalSubstr.length) {
                    longestPalSubstr = substr
                }
            }
        }
    }
    
    if (longestPalSubstr.length === 0) longestPalSubstr = s[0]
    
    // Return longest substring
    return longestPalSubstr
};
    
const isPalindrome = (str) => {
    const len = str.length
    
    // Go through string, compare left and right chars
    for (let x = 0; x < len/2; x += 1) {
        
        // If chars on either side are not same, return false
        if (str[x] !== str[len-x-1]) return false
    }
    return true
}