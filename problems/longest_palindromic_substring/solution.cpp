class Solution {
public:
    string longestPalindrome(string s) {
      // check palindromes centered at i/2
      int idx = 0, len = 0;
      for (int i = 0; i < 2*s.size(); ++i) {
        int p1, p2;
        if (i % 2 == 0) { p1 = p2 = i/2; }
        else { p1 = i/2; p2 = (i+1)/2; }
        while (p1 >= 0 && p2 < s.size()) {
          if (s[p1] == s[p2]) { p1--; p2++; }
          else break;
        }
        p1++; p2--;
        if (p2 - p1 + 1 > len) { idx = p1; len = p2-p1+1; }
      }
      return s.substr(idx, len);
    }
};