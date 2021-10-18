/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */

const isAlienSorted = (words, order) => {
    // Map each character to where it would be in English
    const orderArr = new Array(26)
    for (let x = 0; x < order.length; x += 1) {
        const ch = order.charAt(x)
        orderArr[toOffset(ch)] = x
    }
    
    console.log(orderArr)
    
    // Iterate through all of the words
    for (let x = 0; x < words.length - 1; x += 1) {
        if (compare(words[x], words[x+1], orderArr) > 0) return false
    }
    
    // Otherwise we see all words are sorted
    return true
};

const A_CHAR_CODE = 'a'.charCodeAt(0)
function toOffset(ch) {
    return ch.charCodeAt(0) - A_CHAR_CODE
}

// Compare the words, see if they're lexicographically sorted
function compare(word1, word2, orderArr) {
    let [x, y] = [0, 0]
    let charCompareVal = 0
    
    while (x < word1.length && y < word2.length && charCompareVal === 0) {
        const val1 = orderArr[toOffset(word1[x])]
        const val2 = orderArr[toOffset(word2[y])]
        
        charCompareVal = val1 - val2
        
        x += 1
        y += 1
    }
    
    // If we see both are same, but differ in length
    // We want to make sure smaller word comes before longer word
    if (charCompareVal === 0) return word1.length - word2.length
    
    // Otherwise broke out because it's no longer 0
    else return charCompareVal
}