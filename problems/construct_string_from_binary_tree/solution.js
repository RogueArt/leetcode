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
 * @return {string}
 */
function tree2str(root) {
    if (root === null) return ''
            
    let left = tree2str(root.left)
    let right = tree2str(root.right)
    
    // If left is not empty OR if left is empty AND right is not empty
    // Then we wrap the left string
    if (left !== '' || (left === '' && right !== '')) left = wrap(left)
    
    // Wrap the right value if it's not empty
    if (right !== '') right = wrap(right)
    
    return root.val + left + right
};

function wrap(str) {
    return '(' + str + ')'
}