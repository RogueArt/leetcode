class Solution {
public:
    int numDecodings(string s) {
        int dp[s.size()];
        dp[0] = validOne(s.substr(0, 1));
        if (s.size() > 1)
            dp[1] = (validOne(s.substr(0, 1)) && validOne(s.substr(1, 1)))
                + validTwo(s.substr(0, 2));
        for (int i = 2; i < s.size(); ++i) {
            dp[i] = dp[i-2]*validTwo(s.substr(i-1, 2))
                    + dp[i-1]*validOne(s.substr(i, 1));
        }
        return dp[s.size()-1];
    }
    bool validOne(string one) {
        if ('1' <= one[0] && one[0] <= '9') return true;
        return false;
    }
    bool validTwo(string two) {
        if ('1' == two[0] 
            || ('2' == two[0] && '0' <= two[1] && two[1] <= '6')) return true;
        return false;
    }
};