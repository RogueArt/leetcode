/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    const allowedChars = new Array(26).fill(false)
    
    // Set characters to true if present in allowed
    for (const ch of allowed) {
        allowedChars[ch.charCodeAt(0) - 97] = true
    }
    
    let count = 0
    for (const word of words) {
        if (isConsistent(allowedChars, word)) count += 1
    }
    return count
};
    
function isConsistent(allowedChars, word) {
    for (const ch of word) {
        if (allowedChars[ch.charCodeAt(0) - 97] === false) return false
    }
    return true
}