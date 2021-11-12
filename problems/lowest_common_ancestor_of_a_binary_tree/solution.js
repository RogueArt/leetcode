/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = (root, p, q) => {
    // If the node is null, return null
    if (root === null) return null
    
    // Return root if it matches one of either
    if (root === p || root === q) return root
    
    // Find the ancestors in left and right nodes
    const leftAncestor = lowestCommonAncestor(root.left, p, q)
    const rightAncestor = lowestCommonAncestor(root.right, p, q)

    // If both of them are not null, then return root
    if (leftAncestor && rightAncestor) return root
    
    // Otherwise check if left or right subtree is LCA
    // For example, case where 
    return leftAncestor !== null ? leftAncestor : rightAncestor 
};