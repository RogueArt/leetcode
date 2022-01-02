class Solution {
public:
    int coinChange(vector<int>& coins, int amount) {
        int dp[amount+1];
        memset(dp, -1, sizeof(dp));
        dp[0] = 0;
        for (int i = 0; i <= amount; ++i) {
            if (dp[i] == -1) continue;
            for (auto &j : coins) {
                if (i <= amount-j)
                    dp[i+j] = (dp[i+j] == -1) ? dp[i]+1 : min(dp[i]+1, dp[i+j]);
            }
        }
        return dp[amount];
    }
};