/**
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = (s) => {
    let [left, right] = [0, s.length - 1]
    
    // Go through each char while left and right pointers don't cross
    while (left < right) {
        
        // Check if left and right chars are same
        if (s.charAt(left) !== s.charAt(right)) {
            
            // If they aren't, check if string is palindrome with char removed
            const withoutLeftChar = isRestPalindrome(s, left + 1, right)
            const withoutRightChar = isRestPalindrome(s, left, right - 1)
            
            return withoutLeftChar || withoutRightChar
        }
        
        // Increment pointers towards middle
        left += 1
        right -= 1
    }
    
    // Matches with at least one char not present
    return true
};

// Check if rest of string is palindrome
const isRestPalindrome = (s, left, right) => {
  while (left < right) {
      if (s.charAt(left) !== s.charAt(right)) return false
      
      left += 1
      right -= 1
  }
    
  return true
}