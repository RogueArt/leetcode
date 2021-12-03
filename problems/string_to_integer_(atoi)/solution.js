/**
 * @param {string} s
 * @return {number}
 */
function myAtoi(s) {
    let isPositive = true
    let seenDigits = false
    let sawSign = false
    
    let num = 0
    
    for (const ch of s) {
        // 1. Read in and ignore any leading whitespace
        if ((seenDigits || sawSign) && ch === ' ') break
        if (ch === ' ') continue
        
        // Break and return if it's not a valid char
        if (!isDigit(ch) && !isSign(ch)) break
        
        // Sign is ocurring more than once or after digits
        if (isSign(ch) && (seenDigits || sawSign)) break
        
        // 2. Check if it's a sign
        if (isSign(ch)) {            
            // See sign for first time
            if (ch === '-') isPositive = false
            sawSign = true
        }
        
        // 3. Check if it's a digit
        if (isDigit(ch)) {
            const digit = asciiCharToInt(ch)
            num = (num * 10) + digit
            seenDigits = true
        }
    }
    
    if (!isPositive) num = -num
    return clamp(num)
}

const MIN_INT = -(2 ** 31)
const MAX_INT = (2 ** 31) - 1

// Helper function to clamp number between
// 32-bit integer bounds
function clamp(num) {
    if (num < MIN_INT) return MIN_INT
    else if (num > MAX_INT) return MAX_INT
    else return num
}

const ZERO_CODE = '0'.charCodeAt(0)

// Convert an ascii character to an integer
function asciiCharToInt(ch) {
    const code = ch.charCodeAt(0)
    return code - ZERO_CODE
}

// Check if it's a sign symbol
function isSign(ch) {
    return ch === '+' || ch === '-'
}

// Check if it's a valid digit
function isDigit(ch) { 
    return '0' <= ch && ch <= '9'
}