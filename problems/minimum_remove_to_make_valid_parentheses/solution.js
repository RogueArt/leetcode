/**
 * @param {string} s
 * @return {string}
 */
const minRemoveToMakeValid = (s) => {
    let [str, result, open] = ["", "", 0]

    // Go through each char
    for (const ch of s) {
        // Saw an opening parenthesis
        if (ch === '(') open += 1
        
        // Saw a closed parenthesis
        if (ch === ')') {
            // Continue if closed parenthesis without opening
            if (open === 0) continue
            open -= 1
        }
        
        // Concatenate char to string
        str += ch
    }
    
    // Now deal with opening parentheses at end
    const res = []
    for (let x = str.length - 1; x >= 0; x -= 1) {
        const ch = str[x]
        
        // Don't append if opening parenthesis & is extra
        if (ch === '(' && open > 0) {
            // Decrement # of extra ('s remaining
            open -= 1
            continue
        }
        
        // Add char to char array
        res.push(ch)
    }
    
    return res.reverse().join('')
};