class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int min = prices[0];
        int maxprofit = 0;
        for (int i = 1; i < prices.size(); ++i) {
            maxprofit = max(maxprofit, prices[i]-min);
            min = std::min(min, prices[i]);
        }
        return maxprofit;
    }
};