class Solution {
public:
    int climbStairs(int n) {
        int dp[n+1];
        memset(dp, 0, sizeof(dp));
        dp[0] = 1; dp[1] = 1;
        for (int i = 1; i < n; ++i) {
            dp[i+1] = dp[i] + dp[i-1];
        }
        return dp[n];
    }
};