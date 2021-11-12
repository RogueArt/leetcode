/**
 * @param {string} s
 * @return {boolean}
 */
// Must meet either one of these conditions to be true:
// 1) All the frequencies of the characters are even
// 2) All the frequencies of the characters are even and ONLY ONE is odd
function canPermutePalindrome(s) {
    // Build a frequency map of the characters
    const frequencyMap = {}
    for (const ch of s) {
        if (ch in frequencyMap) frequencyMap[ch] += 1
        else frequencyMap[ch] = 1
    }
    
    // We can iterate through, check that it meets either case 1 or 2
    let hasOneOdd = false
    for (const ch in frequencyMap) {
        // If frequency of a character is not even
        if (frequencyMap[ch] % 2 !== 0) {
            // Check if we already saw an odd frequency
            if (hasOneOdd) return false
            else hasOneOdd = true
        }
    }
    
    return true
};

