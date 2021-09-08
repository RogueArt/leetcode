/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
    let max = 0
    let min = 10_000
    
    for (const price of prices) {
        if (price < min) min = price
        else max = Math.max(max, price - min);
    }
    
    return max    
};