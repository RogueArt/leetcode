/**
 * @param {number[]} nums
 * @return {number}
 */
const numIdenticalPairs = (nums) => {
    const frequency = {}
    for (const num of nums) {
        if (num in frequency) frequency[num] += 1
        else frequency[num] = 1
    }
    
    let sum = 0
    for (const key in frequency) {
        const n = frequency[key] - 1
        sum += n * (n+1)/2
    }
    
    return sum
};



/*
{
    1: [0, 3, 4] (0, 3) (0, 4) (3, 4)
    2: [1],
    3: [2, 5]
}

[0, 1, 2, 3, 4, 5]
(0, 1) (0, 2) (0, 3) (0, 4) (0, 5)
(1, 2) (1, 3) (1, 4) (1, 5) (4, 5)
(2, 3) (2, 4) (2, 5) (3, 4) (3, 5)


3 -> 6 -> 15
*/