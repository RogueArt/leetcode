class Solution {
public:
    string minWindow(string s, string t) {
        // O(n log m) solution with large constant factor of 52
        vector<int> starts;
        int pfx[s.size()][52]; memset(pfx, 0, sizeof(int)*s.size()*52);
        int needed[52]; memset(needed, 0, sizeof(needed));
        for (int i = 0; i < t.size(); ++i) {
            needed[char2Idx(t[i])]++;
        }
        for (int i = 0; i < s.size(); ++i) {
            if (needed[char2Idx(s[i])] > 0) starts.push_back(i);
        }
        // prefix sum to determine how many chars are in an interval
        pfx[0][char2Idx(s[0])] = 1;
        for (int j = 1; j < s.size(); ++j) {
            for (int i = 0; i < 52; ++i) {
                pfx[j][i] = pfx[j-1][i] + (i == char2Idx(s[j]));
            }
        }
        // binary search on the window size
        int begin = s.size(), size = s.size()+1;
        int l = 0, r = s.size();
        int mid = r;
        bool worked = false;
        while (l <= r) {
            for (auto &strt : starts) {
                if (satisfies(pfx, needed, strt, mid, s.size()) && mid < size) {
                    begin = strt;
                    size = mid;
                    worked = true;
                }
            }
            if (worked) {
                r = mid-1;
                worked = false;
            } else {
                l = mid+1;
            }
            mid = (l+r)/2;
        }
        if (size == s.size()+1) return "";
        else return s.substr(begin, size);
    }
    bool satisfies(int pfx[][52], int needed[], int start, int wsize, int ssize) {
        wsize = min(ssize-start, wsize);
        for (int i = 0; i < 52; ++i) {
            int nl = (start == 0) ? 0 : pfx[start-1][i];
            int nr = pfx[start+wsize-1][i];
            if (nr-nl < needed[i]) return false;
        }
        return true;
    }
    int char2Idx(char c) {
        if ('a' <= c && c <= 'z') return c-'a';
        else if ('A' <= c && c <= 'Z') return c-'A'+26;
        return -1;
    }
};