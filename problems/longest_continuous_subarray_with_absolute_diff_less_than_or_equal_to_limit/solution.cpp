class Solution {
public:
    int longestSubarray(vector<int>& nums, int limit) {
      int p1 = 0; int p2 = 0;
      int count = 0;
      priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq1; pq1.push(pair<int, int>(nums[0], 0));
      priority_queue<pair<int, int>> pq2; pq2.push(pair<int, int>(nums[0], 0));
      while (p2 != nums.size()) {
        while (pq1.top().second < p1) pq1.pop();
        while (pq2.top().second < p1) pq2.pop();
        if (abs(nums[p2] - pq1.top().first) <= limit && abs(nums[p2] - pq2.top().first) <= limit) {
          count = max(count, p2-p1+1);
          ++p2;
          if (p2 != nums.size()) {
            pq1.push(pair<int, int>(nums[p2], p2));
            pq2.push(pair<int, int>(nums[p2], p2));
          }
        }
        else {
          ++p1;
          pq1.push(pair<int, int>(nums[p1], p1));
          pq2.push(pair<int, int>(nums[p1], p1));
        }
      }
      return count;
    }
};