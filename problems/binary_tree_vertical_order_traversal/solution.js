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
function verticalOrder(root) {
    if (root === null) return []
    
    const queue = [ { node: root, column: 0, row: 0 } ]
    
    // Keep track of how wide our binary tree is getting
    let [min, max] = [0, 0]
    const resMap = {}
    
    // While the queue is not empty
    while (queue.length > 0) {
        // Grab element from the front of the queue
        const current = queue.shift()
        const curNode = current.node
                
        // Get the leftmost and rightmost indices
        min = Math.min(current.column, min)
        max = Math.max(current.column, max)
        
        // If the current column is not in the map, initialize it with empty array
        if (current.column in resMap === false) resMap[current.column] = []       
        
        // Add our node's value to it
        resMap[current.column].push(curNode.val)
                        
        
        // If the left node is not null, enqueue it
        if (curNode.left !== null) {
            queue.push({ node: curNode.left, column: current.column - 1, row: current.row + 1 })
        }
        
        // If the right node is not null, enqueue it
        if (curNode.right !== null) {
            queue.push({ node: curNode.right, column: current.column + 1, row: current.row + 1 })
        }
    }
    
    // Build array from our map
    const res = []
    for (let x = min; x <= max; x += 1) {
        res.push(resMap[x])
    }
    return res
};