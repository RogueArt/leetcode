class Solution {
public:
    vector<int> countBits(int n) {
        if (n == 0) return vector<int>({0});
        vector<int> cnt; cnt.resize(n+1);
        cnt[0] = 0; cnt[1] = 1;
        int below2 = 1;
        for (int i = 2; i <= n; ++i) {
            if (i >= below2*2) below2 <<= 1;
            cnt[i] = cnt[i-below2]+1;
        }
        return cnt;
    }
};