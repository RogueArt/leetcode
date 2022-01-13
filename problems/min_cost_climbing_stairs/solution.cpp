class Solution {
public:
    int minCostClimbingStairs(vector<int>& cost) {
        int dp[cost.size()+1];
        for (int i = 2; i <= cost.size(); ++i) dp[i] = INT_MAX;
        dp[0] = 0; dp[1] = 0;
        for (int i = 0; i < cost.size(); ++i) {
            dp[i+1] = min(dp[i+1], dp[i]+cost[i]);
            if (i+2 <= cost.size())
                dp[i+2] = min(dp[i+2], dp[i]+cost[i]);
        }
        return dp[cost.size()];
    }
};