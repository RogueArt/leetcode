/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
    // Anagram must have same length
    if (s.length !== t.length) return false
    
    // Fill array with frequencies of each character
    const freqArray = new Array(26).fill(0)
    
    // If both strings have same frequencies of same chars
    // Then resulting array will be array of zeroes
    for (let x = 0; x < s.length; x += 1) {
        const [idx1, idx2] = [charToIdx(s[x]), charToIdx(t[x])]        
        freqArray[idx1] += 1
        freqArray[idx2] -= 1   
    }

    // True if both arrays have zeroes
    return freqArray.every(e => e === 0)
};

// Convert character to an array index
function charToIdx(ch) {
    return ch.charCodeAt(0) - 97
}