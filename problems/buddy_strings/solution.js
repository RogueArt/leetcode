
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
    // Lengths MUST be same and greater than 1
    if (s.length !== goal.length && s.length > 1) return false
    
    // Check if both strings have same characters
    const frequencyArr = new Array(26).fill(0)
    
    // Increment array by one for each character found in s
    for (const ch of s) {
        frequencyArr[charToIndex(ch)] += 1
    }
    
    // Decrement elements in array by one for each character found in goal
    for (const ch of goal) {
        frequencyArr[charToIndex(ch)] -= 1
    }
        
    // If every index is not 0, then strings are not same, so false
    if (!frequencyArr.every(elem => elem === 0)) return false  
    
    // True in two conditions:

    // 1. Strings are exact same, but we swap duplicate characters    
    // Check if strings are exact same + have duplicate characters
    const seenChars = {}
    let [hasDuplicate, exactSame] = [false, true]
    for (let x = 0; x < s.length; x += 1) {
        const ch1 = s[x]
        const ch2 = goal[x]
        
        // If characters aren't same, not exact same
        if (ch1 !== ch2) {
            exactSame = false
            break
        }
        
        // Otherwise, add them to hashmap if not seen already
        if (ch1 in seenChars === false) seenChars[ch1] = true
        // Saw character already
        else hasDuplicate = true    
    }
    
    // If exact same & has duplicates, can swap once
    if (exactSame && hasDuplicate) return true
    if (exactSame && !hasDuplicate) return false
    
    // 2. Strings are not exact same, but will be exact same after 1 swap
    let swappedIndices = [null, null]
    let wasSwapped = false
    for (let x = 0; x < s.length; x += 1) {
        const ch1 = s[x]
        const ch2 = goal[x]
    
        // Ignore index of where we swapped
        if (x === swappedIndices[1]) continue
        
        // Characters don't match
        if (ch1 !== ch2 && !wasSwapped) {
            // Iterate until we find discrepancy
            for (let y = x + 1; y < s.length; y += 1) {
                // Found chars to be swappable
                if (s[y] === ch2 && goal[y] === ch1) {
                    swappedIndices = [x, y]
                    wasSwapped = true
                }
            }
            // Couldn't find discrepancy, so not swappable
            if (!wasSwapped) return false
        }
        
        // Takes more than 1 swap
        else if (ch1 !== ch2 && wasSwapped) return false
    }
    
    return true
};

function charToIndex(ch) {
    return ch.charCodeAt(0) - 97
}

        
    // Find the first two characters that differ
    // Search for differing characters in one of strings
    // Must find both characters at same index
    
    // Once it's done, we continue searching the
    // string as usual, skipping the special index
    // If we find mismatch, return false
    
    // Requires more than 1 swap -> false
    // 

//
// abc
// acb
// abaaac
// acaaab

// abaaacabc
// acaaabacb