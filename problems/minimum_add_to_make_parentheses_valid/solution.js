/**
 * @param {string} s
 * @return {number}
 */
const minAddToMakeValid = (s) => {
    // Keep track of two counts:
    // 1) Track how many open parentheses there are
    // 2) Track how many parentheses are invalid
    
    let [openCount, invalidCount] = [0, 0]
    
    for (const ch of s) {
        // Character is opening parenthesis
        if (ch === '(') openCount += 1
        
        // Character is closing parenthesis
        if (ch === ')') {
            // Extra closing parenthesis, add to invalid count
            if (openCount === 0) invalidCount += 1
                
            // Otherwise, close one of the open parentheses
            else openCount -= 1
        }
    }
    
    return invalidCount + openCount
};
