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
    map<int, int> in2Idx;
    int *ps;
    TreeNode* buildTree(vector<int>& preorder, vector<int>& inorder) {
        for (int i = 0; i < inorder.size(); ++i) 
            in2Idx[inorder[i]] = i;
        int storage = 0;
        ps = &storage;
        TreeNode *dummy = build(preorder, inorder, ps, 0, inorder.size()-1);
        return dummy;
    }
    TreeNode *build(vector<int>& pre, vector<int>& in, int *ps, int il, int ir) {
        // first item of preorder is root
        if (ir == il-1) return nullptr;
        if (il == ir+1) return nullptr;
        TreeNode *root = new TreeNode(pre[*ps]);
        int mid = in2Idx[pre[*ps]];
        (*ps)++;
        root->left = build(pre, in, ps, il, mid-1);
        root->right = build(pre, in, ps, mid+1, ir);
        return root;
    }
};