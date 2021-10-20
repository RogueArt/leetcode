/**
 * @param {string} s
 * @return {string}
 */
const REGEX = /\s+/
const reverseWords = (s) => {
    return s.trim().split(REGEX).reverse().join(' ')
};