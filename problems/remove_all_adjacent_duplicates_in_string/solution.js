/**
 * @param {string} s
 * @return {string}
 */
const removeDuplicates = (s) => {
    for (let x = 0; x < s.length; x += 1) {
        // We take all the characters up to x, 
        // we skip the next two, 
        // and then take the rest of the characters
        if (s[x] === s[x + 1]) {
            s = s.substring(0, x) + s.substring(x + 2, s.length)
            if (x > 0) x -= 2 // This only takes pointer by one
            if (x === 0) x -= 1 // This keeps the pointer where it is
        }
    }
    return s
};

// aabbccdd O(p) where p of the number of adjacent pairs and O(p*n)
    
// aaabaca
// abaca    


// abbaca, x => 1
// aaca, x => 1, we want this to be 0

// aabb, x => 0
// bb, x => -2 + 1, -1