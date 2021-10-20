/**
 * @param {string} digits
 * @return {string[]}
 */

// 3^N space complexity
var letterCombinations = function(digits) {
    let res = []
    
    // 'a', 'b', 'c'
    for (const digit of digits) {
        // 'e', 'f', 'g'
        const letters = digitToLetters[digit]
        
        const temp = []
        for (const stored of res) {
            for (const letter of letters) {
                temp.push(stored + letter)
            }
        }
        
        if (res.length === 0) res = letters
        else res = temp
     }
    
    return res
};

const digitToLetters = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
}