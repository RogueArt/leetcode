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
const maxDepth = (root) => {
    return getHeight(root, 0)
};

function getHeight(node, height) {
    if (node === null) return height
    
    // Get the max of left and right heights
    const leftHeight = getHeight(node.left, height + 1)
    const rightHeight = getHeight(node.right, height + 1)
    
    return Math.max(leftHeight, rightHeight)    
}