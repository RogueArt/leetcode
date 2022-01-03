class Solution {
public:
    int findJudge(int n, vector<vector<int>>& trust) {
        int trustin[n], trustout[n];
        memset(trustin, 0, sizeof(trustin));
        memset(trustout, 0, sizeof(trustout));
        for (auto &v : trust) {
            trustout[v[0]-1]++;
            trustin[v[1]-1]++;
        }
        for (int i = 0; i < n; ++i) {
            if (trustin[i] == n-1 && trustout[i] == 0) return i+1;
        }
        return -1;
    }
};