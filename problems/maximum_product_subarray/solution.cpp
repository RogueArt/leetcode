class Solution {
public:
    int maxProduct(vector<int>& nums) {
        int neg[nums.size()], pos[nums.size()];
        memset(neg, 0, sizeof(neg));
        memset(pos, 0, sizeof(pos));
        if (nums[0] > 0) pos[0] = nums[0];
        else if (nums[0] < 0) neg[0] = nums[0];
        
        int maxprod = nums[0];
        for (int i = 1; i < nums.size(); ++i) {
            pos[i] = max(max(pos[i-1]*nums[i], nums[i]), neg[i-1]*nums[i]);
            neg[i] = min(min(neg[i-1]*nums[i], nums[i]), pos[i-1]*nums[i]);
            maxprod = max(maxprod, pos[i]);
        }
        return maxprod;
    }
};