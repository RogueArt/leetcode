/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    vector<int> nodes;
    int kthSmallest(TreeNode* root, int k) {
        dfs(root);
        return nodes[k-1];
    }
    void dfs(TreeNode *root) {
        if (root == nullptr) return;
        dfs(root->left);
        nodes.push_back(root->val);
        dfs(root->right);
    }
};