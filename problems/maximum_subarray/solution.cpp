class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        // prefix sums?
        int sz = nums.size();
        int pfx[sz], mn[sz];
        pfx[0] = nums[0];
        mn[0] = min(pfx[0], 0);
        int maxsum = pfx[0];
        for (int i = 1; i < sz; ++i) {
            pfx[i] = pfx[i-1] + nums[i];
            mn[i] = min(mn[i-1], pfx[i]);
            maxsum = max(maxsum, pfx[i]-mn[i-1]);
        }
        return maxsum;
    }
};