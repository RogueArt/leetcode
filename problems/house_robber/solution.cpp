class Solution {
public:
    int rob(vector<int>& nums) {
        if (nums.size() == 1) return nums[0];
        int dp[nums.size()];
        dp[0] = nums[0]; dp[1] = std::max(nums[0], nums[1]);
        int max = std::max(dp[0], dp[1]);
        for (int i = 2; i < nums.size(); ++i) {
            dp[i] = std::max(dp[i-2]+nums[i], dp[i-1]);
            max = std::max(max, dp[i]);
        }
        return max;
    }
};