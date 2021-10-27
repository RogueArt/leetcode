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
 * @return {TreeNode}
 */
const invertTree = (root) => {
    invertTheTree(root)
    return root
};

function invertTheTree(root) {
    if (root === null) return root
    
    // Swap the two nodes
    const right = root.right
    root.right = root.left
    root.left = right
    
    // Go into left and right subtrees
    invertTree(root.left)
    invertTree(root.right)
}

// null
// 1
// 

//  1
// 2 3