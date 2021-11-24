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
 * @return {number[]}
 */
function preorderTraversal(root) {
    const res = []
    buildPreorderTraversal(root, res)
    return res
};

function buildPreorderTraversal(root, res = []) {
    if (root === null) return
    
    res.push(root.val)
    buildPreorderTraversal(root.left, res)
    buildPreorderTraversal(root.right, res)
}