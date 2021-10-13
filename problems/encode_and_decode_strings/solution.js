/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
    return strs.map(encodeSingleStr).join('|')
};

function encodeSingleStr(str) {
    return str.split('').map(ch => ch.charCodeAt(0)).join(',')
}

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
function decodeSingleStr(str) {
    return str.split(',').map(ch => ch && String.fromCharCode(ch)).join('')
}

var decode = function(s) {
    return s.split('|').map(decodeSingleStr)
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */