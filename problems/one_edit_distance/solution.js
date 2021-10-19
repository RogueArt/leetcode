/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isOneEditDistance = (s, t) => {
    // Make s the longer string
    if (t.length > s.length) return isOneEditDistance(t, s)
        
    // If length differs by two, then not same
    const lenDiff = s.length - t.length
    if (lenDiff > 1) return false
    
    // Check if insertion or deletion in middle
    for (let x = 0; x < t.length; x += 1) {
        if (s[x] !== t[x]) {
            if (lenDiff === 1) return isRestSame(s, t, x + 1, x)
            else return isRestSame(s, t, x + 1, x + 1)
        }
    }
        
    // Insertion/deletion happened at end
    return lenDiff === 1
}

// Check if rest of string is same
function isRestSame(s, t, left, right) {
    while (left < s.length && right < t.length) {
        if (s[left++] !== t[right++]) return false
    }
    return true
}


  
/*
// Length differs by one, check if insertion or deletion
else if (lenDiff === 1) {

    let [left, right] = [0, 0]
    while (left < s.length && right < t.length) {
        // Characters are mismatched
        if (s[left] !== t[right]) {
            // Skip one character, check if rest same
            return isRestSame(s, t, left + 1, right)
        }

        // Characters are the same
        // Move both pointers to the right
        left += 1
        right += 1
    }

    // Strings are same, except 1 insertion or deletino
    return true
}

// If length is same, check if differs by one 
else {
    for (let x = 0; x < s.length; x += 1) {
        if (s[x] !== t[x]) return isRestSame(s, t, left, right)
    }

    // Exact same strings
    return false
}

*/

/*

// "acb" "ab" (Delete/insert)
// "abb" "acb" (Replace)
// "ab" "ba"


let hasDifference = false


// 
let i = 0
const frequencies = {}
let numDiffs = 0
// Build frequency hashmap from s and t
while (i < s.length && i < t.length) {
    const [ch1, ch2] = [s[i], t[i]]
    frequencies[ch1] = ch1 in frequencies ? frequencies[ch1] + 1 : 1
    frequencies[ch2] = ch2 in frequencies ? frequencies[ch2] - 1 : -1

    if (ch1 !== ch2) numDiffs += 
}
*/

/*


*/
    
// Check if string is same as string w/ one extra letter
// Check if string is same as string w/ 
    
/*
    if ((s.length - t.length) > 1)
    
    const frequency = new Array(26 + 26 + 10).fill(0)
    
    // Add one for every char in s
    for (const ch of s) { 
        frequency[charToIndex(ch)] += 1 
    }
    
    // Remove one for every char in s
    for (const ch of t) {
        frequency[charToIndex(ch)] -= 1
    }
    
    // True only if it has one 1, one -1 or one of both
    let [hasOne, hasNegativeOne] = [false, false]
    
    for (const num of frequency) {
        if (num === -1)
            if (!hasNegativeOne) hasNegativeOne = true
            else return false
        if (num === 1) 
            if (!hasOne) hasOne = true
            else return false
    }
    
    return hasOne || hasNegativeOne
};

function charToIndex(ch) {
    if ('a' <= ch && ch <= 'z') return ch.charCodeAt(0) - 'a'.charCodeAt(0)
    else if ('A' <= ch && ch <= 'Z') return 25 + (ch.charCodeAt(0) - 'A'.charCodeAt(0))
    else return 51 + (ch.charCodeAt(0) - '0'.charCodeAt(0))
}
*/
    