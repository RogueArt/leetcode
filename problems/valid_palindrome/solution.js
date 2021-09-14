/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
    let [left, right] = [0, s.length - 1]
    
    while (left < right) {
        while (left < right && !isAlphanum(s[left])) { left++ }
        while (left < right && !isAlphanum(s[right])) { right-- }

        const leftChar = s[left].toLowerCase()
        const rightChar = s[right].toLowerCase()
        
        if (left < right && leftChar !== rightChar) return false
        left++, right--
    }
    return true
};

function isAlphanum(ch) {
    const isNum = '0' <= ch && ch <= '9'
    const isLower = 'a' <= ch && ch <= 'z'
    const isUpper = 'A' <= ch && ch <= 'Z'
    
    return isNum || isLower || isUpper
}