/**
 * @param {string} s
 * @return {number}
 */
const minAddToMakeValid = (s) => {
    let count = 0
    let invalidCount = 0
    for (const ch of s) {
        if (ch === '(') count += 1
        if (ch === ')') {
            if (count === 0) {
                invalidCount += 1
                continue
            }
            count -= 1
        }
    }
    
    return invalidCount + count
};