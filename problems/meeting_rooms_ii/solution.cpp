class Solution {
public:
    int minMeetingRooms(vector<vector<int>>& intervals) {
        sort(intervals.begin(), intervals.end() 
             );
        priority_queue<int, vector<int>, greater<int>> end;
        int min_conf = 1;
        end.push(intervals[0][1]);
        for (int i = 1; i < intervals.size(); ++i) {
            if (intervals[i][0] >= end.top()) end.pop();
            end.push(intervals[i][1]);
            min_conf = max(min_conf, (int)end.size());
        }
        return min_conf;
    }
};