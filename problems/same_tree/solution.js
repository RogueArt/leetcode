/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = (p, q) => {
    // Four scenarios
    // Case 1: p and q are both null
    if (p === null && q === null) return true
    // Case 2: Only one of p and q are null
    if (p === null || q === null) return false

    // Left and right subtrees must be true 
    const leftSame = isSameTree(p.left, q.left)
    const rightSame = isSameTree(p.right, q.right)
    const bothSame = leftSame && rightSame
    
    // Case 3: p and q are defined, have different values
    // Case 4: p and q are defined, have same values
    return bothSame && p.val === q.val
};