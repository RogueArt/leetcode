/**
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = (s) => { 
    // Check if the string is a palindrome after removing one char from it
    let [left, right] = [0, s.length - 1]
    
    while (left <= right) {
        // If the current char doesn't match, check if rest are palindrome
        if (s[left] !== s[right]) return checkRestPalindrome(s, left + 1, right) || checkRestPalindrome(s, left, right - 1)
    
        left += 1
        right -= 1
    }
    
    return true
}

function checkRestPalindrome(s, left, right) {
    while (left <= right) {
        if (s[left] !== s[right]) return false
        
        left += 1
        right -= 1
    }
    
    return true
}