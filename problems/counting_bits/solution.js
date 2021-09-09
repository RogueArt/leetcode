/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = function(n) {
    const ans = new Array(n + 1).fill(null)
    return ans.map((elem, idx) => getSingleNumOnes(idx))
};

/**
 * @param {number} n
 * @return {number}
 */
const getSingleNumOnes = (num) => {
    let [check, numOnes] = [1, 0]
    
    for (let x = 0; x < 32; x += 1) {
        if (check & num) numOnes++
        check <<= 1
    }
    
    return numOnes
}