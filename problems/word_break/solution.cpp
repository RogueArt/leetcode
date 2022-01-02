class Solution {
public:
    bool wordBreak(string s, vector<string>& wordDict) {
        unordered_set<string> wordset;
        for (auto &w : wordDict) wordset.insert(w);
        // generating all strings in s: O(N^3)
        // mark indices between which a string lies; dp on this
        unordered_map<int, vector<int>> indices;
        for (int l = 1; l <= s.size(); ++l) {
            for (int i = 0; i+l <= s.size(); ++i) {
                string w = s.substr(i, l);
                if (wordset.count(w) > 0) {
                    if (indices.count(i) == 0) indices[i] = vector<int>();
                    indices[i].push_back(i+l-1);
                }
            }
        }
        if (indices.count(0) == 0) return false;
        bool dp[s.size()+1];
        memset(dp, 0, sizeof(dp));
        dp[0] = true;
        for (int i = 0; i < s.size(); ++i) {
            if (indices.count(i) != 0 && (i == 0 || dp[i])) {
                for (auto &j : indices[i]) {
                    dp[j+1] = true;
                }
            }
        }
        return dp[s.size()];
    }
};