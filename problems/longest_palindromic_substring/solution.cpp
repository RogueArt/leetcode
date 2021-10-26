class Solution {
public:
    // dp[i][j] = s[i, j] is palindrome
    string longestPalindrome(string s) {
      bool dp[s.size()][s.size()];
      for (int i = 0; i < s.size(); ++i) {
        dp[i][i] = true;
        if (i != s.size()-1) dp[i][i+1] = s[i] == s[i+1] ? true : false;
      }
      for (int j = 2; j < s.size(); ++j) {
        for (int i = 0; i < s.size()-1 && i+j < s.size(); ++i) {
          dp[i][i+j] = dp[i+1][i+j-1] && s[i] == s[i+j] ? true : false;
        }
      }
      int mxLo, mxHi; mxLo = mxHi = 0;
      for (int i = 0; i < s.size(); ++i) {
        for (int j = i; j < s.size(); ++j) {
          if (dp[i][j] && j-i+1 > mxHi-mxLo+1) {
            mxLo = i; mxHi = j;
          }
        }
      }
      return s.substr(mxLo, mxHi-mxLo+1);
    }
};