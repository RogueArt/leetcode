class Solution {
public:
    int hammingWeight(uint32_t n) {
        uint32_t check = 1;
        int numOnes = 0;

        
        // Shift left 31 times
        for (int x = 0; x < 32; x += 1) {
            if (check & n) numOnes += 1;
            check = check << 1;
        }
        
        return numOnes;
    }
};