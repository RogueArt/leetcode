/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
function rangeSumBST(root, low, high) {
    return performRangeSumBST(root, low, high, 0)
};

function performRangeSumBST(root, low, high, sum) {
    if (root === null) return 0
    
    // If value is between low and high inclusive, add it to sum
    const addToSum = (low <= root.val && root.val <= high) ? root.val : 0
    
    // Get left and right sums
    const leftSum = performRangeSumBST(root.left, low, high, sum)
    const rightSum = performRangeSumBST(root.right, low, high, sum)
       
    // Return left sum, right sum, and possibly the current value added
    return leftSum + rightSum + addToSum
}