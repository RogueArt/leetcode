class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        unordered_map<char, int> charindex;
        int p1 = 0, p2 = 0;
        int longest = 0;
        while (p2 < s.size()) {
            if (charindex.count(s[p2]) > 0 && p1 <= charindex[s[p2]]) {
                p1 = charindex[s[p2]]+1;
                longest = max(longest, p2-p1+1);
            } else {
                charindex[s[p2]] = p2;
                longest = max(longest, p2-p1+1);
                p2++;
            }
        }
        longest = max(longest, p2-p1);
        return longest;
    }
};