class Solution {
public:
    string longestPalindrome(string s) {
        bool dp[s.size()+1][s.size()];
        // dp[i][j]: str from [j, j+i]
        memset(dp, 0, sizeof(dp));
        memset(dp[1], 1, sizeof(dp[0]));
        int p1 = 0, p2 = 0;
        for (int i = 2; i <= s.size(); ++i) {
            for (int j = i-1; j < s.size(); ++j) {
                if (s[j] == s[j-i+1] && (i == 2 || dp[i-2][j-1])) {
                    if (i > p2-p1+1) {
                        p1 = j-i+1;
                        p2 = j;
                    }
                    dp[i][j] = 1;
                }
            }
        }
        return s.substr(p1, p2-p1+1);
    }
};