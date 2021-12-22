/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    // Store the original and shuffled arrays
    this.original = [...nums]
    this.shuffled = [...nums]
    
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    // Reset the shuffled array to original
    this.shuffled = [...this.original]
    return this.shuffled
};

// Generate random number in a range
Solution.prototype.randRange = function(min, max) {
    return parseInt(Math.random() * (max - min)) + min
}

// Swap values at two indices
Solution.prototype.swapAt = function(x, y) {
    const temp = this.shuffled[x]
    this.shuffled[x] = this.shuffled[y]
    this.shuffled[y] = temp
}

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    for (let x = 0; x < this.shuffled.length; x += 1) {
        this.swapAt(x, this.randRange(x, this.shuffled.length))
    }
    return this.shuffled
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */