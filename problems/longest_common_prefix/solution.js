/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
    let [idx, prefix] = [0, ""]
       
    while (idx < strs[0].length) {
        // Go through each string, match target char
        let targetChar = strs[0].charAt(idx)
        for (const str of strs) {
            // Get character of the string
            const char = str.charAt(idx)
            
            // If char at index is undefined, return
            if (char === undefined) return prefix
            
            // Check if the char at index is same
            if (char !== targetChar) return prefix
        }
        // If all chars are same, then add the current char to prefix
        prefix += targetChar
        idx += 1
    }
    
    return prefix
};