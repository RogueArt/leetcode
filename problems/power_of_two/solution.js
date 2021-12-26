/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfTwo(x) {
    // Zero and below are not powers of 2
    if (x <= 0) return false
    
    // Use bitmasking to see if just the rightmost bit is toggled 
    return (x & -x) === x
};

/*
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
*/