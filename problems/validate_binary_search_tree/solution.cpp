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
    vector<int> v;
    bool isValidBST(TreeNode* root) {
        dfs(root);
        for (int i = 1; i < v.size(); ++i) {
            if (v[i] <= v[i-1]) return false;
        }
        return true;
    }
    void dfs(TreeNode *head) {
        if (head == nullptr) return;
        dfs(head->left);
        v.push_back(head->val);
        dfs(head->right);
    }
};