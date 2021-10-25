/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
    let max = 0
    let min = Number.MAX_SAFE_INTEGER
    
    for (const price of prices) {
       // Found a value smaller than smallest seen
        if (price < min) min = price
        
        // Calculate profit of selling today
        else max = Math.max(max, price - min)
    }
    
    return max
};