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
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    return binarySearch(root, target, Infinity)
};

function binarySearch(root, target, closest) {
    // If root is null, stop search, return closest so far
    if (root === null) return closest
    
    // If current value is closer to target, then pass that value
    const diffCurrent = Math.abs(target - root.val)
    const diffClosest = Math.abs(target - closest)
    closest = diffCurrent < diffClosest ? root.val : closest
          
    // Search right if val is less than target
    if (root.val < target) return binarySearch(root.right, target, closest)
    
    // Search left if val is more than target
    if (root.val > target) return binarySearch(root.left, target, closest)
    
    // If they're the exact same, stop search, return closest
    return closest
}