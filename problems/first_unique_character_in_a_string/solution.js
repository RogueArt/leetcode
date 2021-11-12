/**
 * @param {string} s
 * @return {number}
 */
function firstUniqChar(s) {
    // Build a frequency array from the string
    const freq = new Array(26).fill(0)
    for (const ch of s) {
        const index = ch.charCodeAt(0) - 97
        freq[index] += 1
    }
    
    // Iterate through characters, find which one has frequency of 1
    for (let x = 0; x < s.length; x += 1) {
        const ch = s[x]
        const index = ch.charCodeAt(0) - 97
        if (freq[index] === 1) return x 
    }
    
    return -1
};