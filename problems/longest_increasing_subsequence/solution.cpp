class Solution {
public:
    int lengthOfLIS(vector<int>& nums) {
        int dp[nums.size()];
        for (int i = 0; i < nums.size(); ++i) dp[i] = 1;
        int max = 1;
        for (int i = 0; i < nums.size()-1; ++i) {
            for (int j = i+1; j < nums.size(); ++j) {
                if (nums[j] > nums[i]) {
                    dp[j] = std::max(dp[j], dp[i]+1);
                    max = std::max(max, dp[j]);
                }
            }
        }
        return max;
    }
};