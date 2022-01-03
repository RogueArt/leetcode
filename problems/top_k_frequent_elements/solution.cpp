class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        unordered_map<int, int> m;
        for (int i = 0; i < nums.size(); ++i) {
            if (m.count(nums[i]) == 0) m.insert(make_pair(nums[i], 0));
            m[nums[i]]++;
        }
        vector<pair<int, int>> v;
        for (auto it = m.begin(); it != m.end(); ++it) {
            v.push_back(make_pair(it->second, it->first)); 
        }
        sort(v.begin(), v.end(), greater<pair<int, int>>());
        vector<int> ans;
        for (int i = 0; i < k; ++i) ans.push_back(v[i].second);
        return ans;
    }
};