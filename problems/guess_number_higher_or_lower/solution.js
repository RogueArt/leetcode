/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let [left, right] = [1, n]
    while (left <= right) {
        // Get the midpoint of range
        const mid = left + Math.floor((right - left)/2)
    
         // Guess a value and return the result
        const result = guess(mid)
    
        switch (result) {
            case 0: return mid
            case 1: left = mid + 1; break
            case -1: right = mid - 1; break
            default: break
        }
    }
};