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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

const rangeSumBST = (root, low, high) => {
    return dfs(root, low, high, 0);
}

function dfs(root, low, high) {
    if (root === null) return 0
    
    let result = 0
    const val = root.val
    if (low <= val && val <= high) result += val
    
    result += dfs(root.right, low, high, result)
    result += dfs(root.left, low, high, result)

    return result
}

