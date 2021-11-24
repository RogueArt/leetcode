/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    // Trivial cases of 0 and 1
    if (x === 0) return 0
    if (x === 1) return 1
    
    let [left, right] = [1, Math.floor(x / 2)]
    let max = 1
    while (left <= right) {
        const mid = left + Math.floor((right - left)/2)
        const square = mid * mid
        
        // Return square root if square equals x
        if (square === x) return mid
        
        // Square is less than x, searching towards right
        else if (square < x) {
            left = mid + 1
            max = mid
        }
        
        // Square is bigger than x, search towards left
        else {
            right = mid - 1
        }
    }
    return max
};

// Find the largest square number is greater than
// 2^2 -> 4
// 3^2 -> 9

// 4^2 -> 16

// 15 / 2 -> 7
// 0 to 7
