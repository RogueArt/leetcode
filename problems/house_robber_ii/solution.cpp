class Solution {
public:
    int rob(vector<int>& nums) {
        // fix a house to rob, then just apply House Robber I
        if (nums.size() == 1) return nums[0];
        int N = nums.size();
        int max = nums[0];
        for (int i = 0; i < N; ++i) { // i represents the offset
            int dp[N];
            dp[0] = 0; dp[1] = nums[(i+1)%N];
            max = std::max(max, dp[1]);
            for (int j = 2; j < N; ++j) {
                dp[j] = std::max(dp[j-1], dp[j-2]+nums[(j+i)%N]);
                max = std::max(dp[j], max);
            }
        }
        return max;
    }
};