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
function maxDepth(root) {    
    return getDepth(root, 0)
};

function getDepth(root, depth) {
    if (root === null) return depth

    const leftDepth = getDepth(root.left, depth + 1)
    const rightDepth = getDepth(root.right, depth + 1)
    
    return Math.max(leftDepth, rightDepth)
}