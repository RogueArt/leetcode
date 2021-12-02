
var TwoSum = function() {
    this.map = {}
    this.nums = []
};

/** 
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function(number) {
    this.map[number] = this.nums.length
    this.nums.push(number)
};

/** 
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function(value) {
    for (let x = 0; x < this.nums.length; x += 1) {
        const num = this.nums[x]
        const diff = value - num
        if (diff in this.map && x != this.map[diff]) {
            return true
        }
    }
    return false
};

/** 
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */