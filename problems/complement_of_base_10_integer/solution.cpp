class Solution {
public:
    int bitwiseComplement(int n) {
        if (n == 0) return 1;
        int other = 0;
        for (int i = 0; i < 32-__builtin_clz(n); ++i) {
            other = (other << 1) + 1;
        }
        return n ^ other;
    }
};