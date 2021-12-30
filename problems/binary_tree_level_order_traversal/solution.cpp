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
    vector<vector<int>> levelOrder(TreeNode* root) {
        if (root == nullptr) return vector<vector<int>>();
        queue<pair<TreeNode *, int>> q;
        q.push(make_pair(root, 0));
        vector<vector<int>> ans;
        while (!q.empty()) {
            auto curr = q.front(); q.pop();
            if (curr.second == ans.size()) {
                ans.push_back({curr.first->val});
            } else {
                ans.back().push_back(curr.first->val);
            }
            if (curr.first->left != nullptr) 
                q.push(make_pair(curr.first->left, curr.second+1));
            if (curr.first->right != nullptr)
                q.push(make_pair(curr.first->right, curr.second+1));
        }
        return ans;
    }
};