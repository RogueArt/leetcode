/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var flipEquiv = function(root1, root2) {    
    // Check if nodes are null at same time, if so true
    if (root1 === null && root2 === null) return true
    
    // If they aren't, return false
    if (root1 === null || root2 === null) return false
    
    // Return false if the two nodes aren't same
    if (root1.val !== root2.val) return false
    
    // Compare the opposing nodes at each level
    const oddFlip = flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left)
    const evenFlip = flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right)
    
    // Return if it was flipped odd or even number of times
    return oddFlip || evenFlip
};