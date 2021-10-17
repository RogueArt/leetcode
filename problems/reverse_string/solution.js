/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = (s) => {
    let [left, right] = [0, s.length - 1]
    
    while (left <= right) {
        // Swap left and right
        [s[left], s[right]] = [s[right], s[left]]
        
        // Bring both pointers closer to middle
        left += 1
        right -= 1
    }

    // Return the reversed array
    return s
};