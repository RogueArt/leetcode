/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = accounts => {
    let max = -1;
    for (const customer of accounts) {
        let runningSum = 0
        for (const wealth of customer) {
            runningSum += wealth
        }
        max = Math.max(runningSum, max)
    }
    return max
};