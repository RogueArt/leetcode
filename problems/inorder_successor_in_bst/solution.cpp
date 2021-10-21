/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    TreeNode* inorderSuccessor(TreeNode* root, TreeNode* p) {
      vector<pair<int, TreeNode*>> v;
      queue<pair<int, TreeNode*>> q; q.push(pair<int, TreeNode*>(root->val, root));
      while (q.size() != 0) {
        auto curr = q.front(); q.pop();
        v.push_back(curr);
        if (curr.second->left != nullptr) q.push(pair<int, TreeNode*>(curr.second->left->val, curr.second->left));
        if (curr.second->right != nullptr) q.push(pair<int, TreeNode*>(curr.second->right->val, curr.second->right));
      }
      sort(v.begin(), v.end());
      for (auto &ve : v) {
        if (ve.first > p->val) return ve.second;
      }
      return nullptr;
    }
};