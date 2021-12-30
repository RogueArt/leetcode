class Solution {
public:
    bool canJump(vector<int>& nums) {
        // obviously DP
        bool reachable[nums.size()];
        memset(reachable, 0, sizeof(reachable));
        reachable[0] = true;
        for (int i = 0; i < nums.size()-1; ++i) {
            if (!reachable[i]) return false;
            for (int j = std::min((int)nums.size()-1, i+nums[i]); !reachable[j]; --j) {
                reachable[j] = true;
            }
        }
        return reachable[nums.size()-1];
    }
};