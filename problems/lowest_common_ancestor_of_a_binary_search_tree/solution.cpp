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
    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
        TreeNode *l = (p->val < q->val) ? p : q;
        TreeNode *r = (l == p) ? q : p;
        
        while (!((l->val <= root->val && root->val < r->val) ||
                 (l->val < root->val && root->val <= r->val))) {
            if (l->val > root->val) root = root->right;
            else root = root->left;
        }
        return root;
    }
};