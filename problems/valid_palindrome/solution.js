/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
    let [left, right] = [0, s.length - 1]
    
    // Go until left pointer is right of right
    while (left <= right) {
        const [leftCh, rightCh] = [s[left].toLowerCase(), s[right].toLowerCase()]
        
        // If it's not alphanumeric, skip one left
        if (!isAlnum(leftCh)) { 
            left += 1
            continue
        }
        
        // If it's not alphanumeric, skip one right
        if (!isAlnum(rightCh)) {
            right -= 1
            continue
        }
        
        // Check if characters are same on both sides
        if (leftCh !== rightCh) return false
        
        left += 1
        right -= 1
    }
    
    // Characters are same on both sides, so palindrome
    return true
};

// Check if a character is alphanumeric
function isAlnum(ch) {
    if ('0' <= ch && ch <= '9') return true
    if ('a' <= ch && ch <= 'z') return true
    
    return false
}