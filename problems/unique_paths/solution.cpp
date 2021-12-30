class Solution {
public:
    int uniquePaths(int m, int n) {
        long long ans;
        ans = mult(max(m-1, n-1)+1, m+n-2) / mult(1, min(m-1, n-1));
        return (int)ans;
    }
    // multiply from i...j
    long long mult(int i, int j) {
        long long ans = 1;
        for (int x = i; x <= j; ++x) {
            ans *= x;
        }
        return ans;
    }
};