class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        vector<int> pfx, sfx;
        pfx.push_back(nums[0]);
        sfx.push_back(nums[nums.size()-1]);
        for (int i = 1; i < nums.size(); ++i) {
           pfx.push_back(pfx[i-1]*nums[i]); 
           sfx.push_back(sfx[i-1]*nums[nums.size()-1-i]);
        }
        vector<int> ans;
        for (int i = 0; i < nums.size(); ++i) {
           int x = 1; 
           if (i != 0) x = pfx[i-1];
           if (i != nums.size()-1) x *= sfx[nums.size()-2-i];
           ans.push_back(x);
        }
        return ans;
    }
};