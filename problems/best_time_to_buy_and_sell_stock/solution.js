/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
    let min = prices[0]
    let res = 0
    let len = prices.length
    for (let x = 1; x < len; x++) {
        res = Math.max(res, prices[x] - min)
        min = Math.min(prices[x], min)
    }
    return res
};