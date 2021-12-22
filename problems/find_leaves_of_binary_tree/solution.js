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
function findLeaves(root) {
    const nodes = []
    collectNodes(root, nodes)
    return nodes
};

function collectNodes(root, nodes) {
    // Base case: we hit a null node
    if (root === null) return -1
     
    // Get the depth at which left and right were popped
    const left = collectNodes(root.left, nodes)
    const right = collectNodes(root.right, nodes)
    
    // This node has level of max of left and right plus one
    const newLevel = Math.max(left, right) + 1
    
    // Add the node to the array
    if (!Array.isArray(nodes[newLevel])) nodes[newLevel] = []
    nodes[newLevel].push(root.val)
    
    // Return the new level
    return newLevel
}