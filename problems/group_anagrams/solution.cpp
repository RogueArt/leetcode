class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        // sort twice: once by char, once by string
        vector<pair<string, int>> strs_copy;
        for (int i = 0; i < strs.size(); ++i) {
            strs_copy.push_back(make_pair(strs[i], i));
            sort(strs_copy[i].first.begin(), strs_copy[i].first.end());
        }
        sort(strs_copy.begin(), strs_copy.end());
        
        vector<vector<string>> ans;
        ans.push_back(vector<string>(1, strs[strs_copy[0].second]));
        for (int i = 1; i < strs.size(); ++i) {
            if (strs_copy[i].first == strs_copy[i-1].first)
                ans.back().push_back(strs[strs_copy[i].second]);
            else
                ans.push_back(vector<string>(1, strs[strs_copy[i].second]));
        }
        return ans;
    }
};