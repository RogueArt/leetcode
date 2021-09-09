/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = s => {
    let stack = []
    for (let x = 0; x < s.length; x += 1) {
        const ch = s[x]
        if (isLeftBracket(ch)) stack.push(ch)
        if (isRightBracket(ch)) {
            const leftBracket = stack.pop()
            if (!bracketsMatch(leftBracket, ch)) return false
        }
    }
    return stack.length === 0
};
    
function isLeftBracket(ch) {
    return ch === '(' || ch === '{' || ch === '['
}
    
function isRightBracket(ch) {
    return ch === ')' || ch === '}' || ch === ']'
}
    
function bracketsMatch(left, right) {
    if (left === '{' && right === '}') return true
    if (left === '(' && right === ')') return true
    if (left === '[' && right === ']') return true
    else return false
}