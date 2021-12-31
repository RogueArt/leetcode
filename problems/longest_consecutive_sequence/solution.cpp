class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        int maxsum = 0;
        int lcs = 0;
        unordered_map<int, int> dp;
        for (int i = 0; i < nums.size(); ++i) {
            if (dp.count(nums[i]) == 0) {
                int sum = 1;
                int l = 0, r = 0;
                if (dp.count(nums[i]-1) != 0) {
                    l = dp[nums[i]-1];
                    sum += l;
                }
                if (dp.count(nums[i]+1) != 0) {
                    r = dp[nums[i]+1];
                    sum += r;
                }
                dp[nums[i]-l] = dp[nums[i]+r] = dp[nums[i]] = sum;
                maxsum = max(maxsum, sum);
            }
        }
        return maxsum;
    }
};