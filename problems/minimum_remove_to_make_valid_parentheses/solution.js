/**
 * @param {string} s
 * @return {string}
 */
const minRemoveToMakeValid = (s) => {
    // Go through remove excess ) parentheses
    let removedRight = ''
    let openCount = 0
    for (const ch of s) {
        // Increase open count every time we see an opening parenthesis
        if (ch === '(') openCount += 1
        
        // Decrease open count every time we see a closed parenthesis
        if (ch === ')') {
            // If more closing parentheses than open, ignore
            if (openCount === 0) continue
            openCount -= 1
        }
        
        // Add characters to the string
        removedRight += ch
    }
    
    let res = ''
    // Iterate backwards, remove excess ( parentheses
    for (let x = removedRight.length - 1; x >= 0; x -= 1) {
        const ch = removedRight[x]
        if (ch === '(' && openCount > 0) {
            openCount -= 1
            continue
        }
        
        res += ch
    }
    
    return res.split('').reverse().join('')
};

// ))((

// ()()
// ()(()
// ()(())