class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        int pfx[nums.size()], sfx[nums.size()];
        pfx[0] = nums[0];
        sfx[nums.size()-1] = nums[nums.size()-1];
        for (int i = 1; i < nums.size(); ++i) {
            pfx[i] = nums[i] * pfx[i-1];
            sfx[nums.size()-1-i] = nums[nums.size()-1-i] * sfx[nums.size()-i];
        }
        vector<int> ans; ans.resize(nums.size());
        ans[0] = sfx[1]; ans[nums.size()-1] = pfx[nums.size()-2];
        for (int i = 1; i < nums.size()-1; ++i) {
            ans[i] = pfx[i-1] * sfx[i+1];
        }
        return ans;
    }
};