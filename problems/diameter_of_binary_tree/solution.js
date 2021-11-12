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
 * @return {number}
 */

function diameterOfBinaryTree(root) {
    // Store a reference to diameter
    const diaRef = { diameter: 0 }
    longestPath(root, diaRef)
    return diaRef.diameter
};

function longestPath(root, diaRef) {
    // If node is null, then longest path is zero
    if (root === null) return 0
    
    // Get the longest left and right paths
    const leftPath = longestPath(root.left, diaRef)
    const rightPath = longestPath(root.right, diaRef)
    
    // Set diameter to max of current diameter and left and right path lengths
    diaRef.diameter = Math.max(diaRef.diameter, leftPath + rightPath)
    
    // The longest path is the one between left and right path
    // We add one for the connecting node in between
    return Math.max(leftPath, rightPath) + 1
}

/*
        3
       / \
      2   3
     /
    1
   / \
  1   4




*/