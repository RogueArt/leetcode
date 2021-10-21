class Solution {
public:
    int distributeCandies(vector<int>& candyType) {
        set<int> unique;
        for (auto &x : candyType) unique.insert(x);
        return min(unique.size(), candyType.size()/2);
    }
};