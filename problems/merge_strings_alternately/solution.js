/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
function mergeAlternately(word1, word2) {    
    // Accumulate in alternating order
    const minLen = Math.min(word1.length, word2.length)
    const maxLen = Math.max(word1.length, word2.length)
    
    // Get the rest of the characters in the bigger word
    const biggerWord = word1.length > word2.length ? word1 : word2
    
    return mergeWord(word1, word2) + biggerWord.substring(minLen, maxLen)
};

// Merge any two words up to the shortest length
function mergeWord(word1, word2) {
    const minLen = Math.min(word1.length, word2.length)
    
    let merged = ''
    for (let x = 0; x < minLen; x += 1) {
        merged += word1[x] + word2[x]
    }
    return merged
}