/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = n => {
    const init = [1, 1]
    for (let x = 0; x < n - 1; x += 1) {        
        [init[0], init[1]] = [init[1], init[1] + init[0]]
    }
    return init[1]
};
