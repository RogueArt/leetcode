/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfTwo(n) {
    // Non-positive numbers are not powers of 2
    if (n <= 0) return false
    
    // Get how many bits are 1 in the number
    let bitCount = 0
    for (let x = 0; x < 32; x += 1) {
        const rightMost = n & 1;
        if (rightMost === 1) bitCount += 1
        
        // Right shift by 1
        n >>= 1;
    }
    
    // Only 1 bit if it's positive
    return bitCount === 1  
};