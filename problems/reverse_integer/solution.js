/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
    // Trivial case, if 0, return 0
    if (x == 0) return x
    
    // Otherwise we get the reversed integer
    const val = ((x > 0) ? 1 : -1) * parseInt(x.toString().split('').reverse().join(''))
    
    // Make sure it's within the range
    const thirtyTwoBitMax = (2 ** 31)
    if (val < -thirtyTwoBitMax || val > (thirtyTwoBitMax - 1)) return 0
    else return val
};