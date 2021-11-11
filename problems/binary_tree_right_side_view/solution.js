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
const rightSideView = (root) => {
    // Perform a queue-based BFS
    if (root === null) return []

    // Hold the right-side views
    const res = []
    
    // Enqueue the root and its level
    const queue = [ { node: root, height: 0 } ]
    
    // Do a level-order traversal of the tree from left-to-right
    while (queue.length > 0) {
        // Dequeue from froont
        const current = queue.shift()
        
        // Add the current value and height to the map 
        res[current.height] = current.node.val
        
        // Enqueue left node
        if (current.node.left !== null) {
            queue.push({ node: current.node.left, height: current.height + 1 })
        }
        
        // Enqueue right node
        if (current.node.right !== null) {
            queue.push({ node: current.node.right, height: current.height + 1 })
        }
    }
    
    return res
};