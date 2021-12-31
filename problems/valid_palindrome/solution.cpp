class Solution {
public:
    bool isPalindrome(string s) {
        string alpha = "";
        for (int i = 0; i < s.size(); ++i) {
            if (isalnum(s[i])) alpha += s[i];
        }
        int p1 = 0, p2 = alpha.size()-1;
        while (p1 < p2) {
            if (!equal(alpha[p1], alpha[p2])) return false;
            p1++; p2--;
        }
        return true;
    }
    bool equal(char c1, char c2) {
        return tolower(c1) == tolower(c2);
    }
};