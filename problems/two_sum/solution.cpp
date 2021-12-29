class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> numindex;
        for (int i = 0; i < nums.size(); ++i) {
            if (numindex.count(target-nums[i]) > 0) {
                vector<int> ans = {i, numindex[target-nums[i]]};
                return ans;
            }
            numindex.insert(pair<int, int>(nums[i], i));
        }
        return vector<int>();
    }
};