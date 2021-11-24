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
 * @return {number[][]}
 */
function levelOrder(root) {
    if (root === null) return []
    
    const res = []
    const queue = [ { node: root, height: 0 }]
    while (queue.length > 0) {
        const current = queue.shift()
        
        // Add a subarray to res
        if (res.length === current.height) res[current.height] = []
        res[current.height].push(current.node.val)
        
        // Enqueue left and right nodes
        if (current.node.left !== null) queue.push({ node: current.node.left, height: current.height + 1 })
        if (current.node.right !== null) queue.push({ node: current.node.right, height: current.height + 1 })
    }
    
    return res
};