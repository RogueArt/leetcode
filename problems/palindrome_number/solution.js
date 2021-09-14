/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
    // Negative integers can't be palindromes
    if (x < 0) return false
    
    const stack = []
    const originalNum = x

    // Create stack out of digits
    while (x > 0) {
        stack.push(x % 10)
        x = Math.floor(x / 10)
    }
    
    // Reset x
    x = originalNum
    
    // Go through each digit
    while (x > 0) {
        const top = stack.pop()
        const nextDigit = x % 10
        
        if (nextDigit !== top) return false
        
        x = Math.floor(x / 10)
    }
    return true
};