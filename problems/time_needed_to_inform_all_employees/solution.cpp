class Solution {
public:
    int numOfMinutes(int n, int headID, vector<int>& manager, vector<int>& informTime) {
        int times[manager.size()]; memset(times, -1, sizeof(times));
        times[headID] = 0;
        for (int i = 0; i < manager.size(); ++i) {
          // propagate upward
          if (times[i] == -1) {
            int curr = i;
            stack<int> stk; stk.push(curr);
            while (times[manager[curr]] == -1) { // when we stop
              curr = manager[curr];
              stk.push(curr);
            }
            while (stk.size() != 0) {
              curr = stk.top();
              times[curr] = times[manager[curr]] + informTime[manager[curr]];
              stk.pop();
            }
          }
        }
        int maxTime = 0;
        for (int i = 0; i < manager.size(); ++i) maxTime = max(maxTime, times[i]);
        return maxTime;
    }
};