class Solution {
public:
    int maxArea(vector<int>& height) {
        int p1 = 0, p2 = height.size()-1;
        int mx = 0;
        while (p1 != p2) {
            int minidx = height[p1] < height[p2] ? p1 : p2;
            int area = (p2-p1) * (height[minidx]);
            mx = max(mx, area);
            if (p1 == minidx) p1++;
            else p2--;
        }
        return mx;
    }
};