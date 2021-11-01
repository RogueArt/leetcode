/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = (flowerBed, n) => {
    // Cap the ends with zero's - O(n) time, O(1) space
    flowerBed.unshift(0)
    flowerBed.push(0)
          
    // O(n) time
    for (let x = 0; x < flowerBed.length - 2; x += 1) {
        if (flowerBed[x] === 0 && flowerBed[x + 1] === 0 && flowerBed[x + 2] === 0) {
            flowerBed[x + 1] = 1
            n--
        }
        
        if (n <= 0) return true
    }
    
    return n === 0
};

// [0, 1, 0, 1, 0]