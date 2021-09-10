/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const numJewelsInStones = (jewels, stones) => {
    // Create a hashmap with items in jewels
    const jewelsMap = {}
    for (const jewel of jewels) {
        jewelsMap[jewel] = true
    }
    
    // Loop through stones, count how many chars are in map
    let jewelCount = 0
    for (const stone of stones) {
        if (jewelsMap[stone]) jewelCount++
    }
    
    return jewelCount
};