/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
var SparseVector = function(nums) {
    this.pairs = []
    // We have pairs of index, values sorted by increasing index
    for (let idx = 0; idx < nums.length; idx += 1) {
        const val = nums[idx]
        if (val !== 0) this.pairs.push([idx, val])
    }
};

// Return the dotProduct of two sparse vectors
/**
 * @param {SparseVector} vec
 * @return {number}
 */
SparseVector.prototype.dotProduct = function(vec) {
    let result = 0
    let [left, right] = [0, 0]
    
    while (left < this.pairs.length && right < vec.pairs.length) {
        // Check if indices are the same
        if (this.pairs[left][0] === vec.pairs[right][0]) {
           // If they are, add to dot product, increase both
           result += this.pairs[left][1] * vec.pairs[right][1]
            
            left += 1
            right += 1
        }
        
        // If left index is farther ahead, move up right index
        else if (this.pairs[left][0] > vec.pairs[right][0]) right += 1
        
        // If right index is farther ahead, move up left index
        else left += 1
    }
    
    return result
};

// Your SparseVector object will be instantiated and called as such:
// let v1 = new SparseVector(nums1);
// let v2 = new SparseVector(nums2);
// let ans = v1.dotProduct(v2);