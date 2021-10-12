/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = (num1, num2) => {
    if (num1.length < num2.length)
        return addStrings(num2, num1)
    
    // Constants to avoid accessing length property
    const maxLen = num1.length
    const minLen = num2.length
    
    // Store our result here
    const res = new Array(maxLen + 1)
    
    let carry = 0
    // Go through each number of the largest string
    for (let x = 0; x < maxLen; x += 1) {        
        const digit1 = digitToInt(num1, x)
        const digit2 = digitToInt(num2, x) // If becomes null, cast to 0
                
        const sum = digit1 + digit2 + carry
        res[maxLen - x] = sum % 10
        carry = Math.floor(sum / 10)
    }
        
    // Add carry if it's there
    if (carry === 1) res[0] = carry
    
    return res.join('')
};

// Helper function to turn a string digit to an integer
const ZERO_OFFSET = 48
function digitToInt(num, x) {
    const char = num[num.length - x - 1]
    if (char === undefined) return 0
    
    return char.charCodeAt(0) - ZERO_OFFSET
}