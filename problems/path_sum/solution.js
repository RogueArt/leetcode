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
 * @param {number} targetSum
 * @return {boolean}
 */
function hasPathSum(root, targetSum) {
    if (root === null) return false

    const stack = []
    stack.push({ node: root, sum: targetSum })

    while (stack.length > 0) {
        const { node: curNode, sum: curSum } = stack.pop()
        // Get the next sum for the next iteration 
        const nextSum = curSum - curNode.val
        
        // Check if it's a leaf node and if it's current sum is 0
        if (curNode.left === null && curNode.right === null && nextSum === 0) return true
        

        
        // Push the left and right child nodes if they exist
        if (curNode.left !== null) stack.push({ node: curNode.left, sum: nextSum })
        if (curNode.right !== null) stack.push({ node: curNode.right, sum: nextSum })
    }
    
    return false
};