class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
      priority_queue<int, vector<int>, greater<int>> pq;
      for (int i = 0; i < m; ++i) pq.push(nums1[i]);
      for (auto x : nums2) pq.push(x);
      int i = 0;
      while (pq.size() != 0) {
        nums1[i] = pq.top(); pq.pop();
        ++i;
      }
    }
};