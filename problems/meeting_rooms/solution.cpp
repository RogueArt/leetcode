class Solution {
public:
    bool canAttendMeetings(vector<vector<int>>& intervals) {
        // sort intervals by ending time
        sort(intervals.begin(), intervals.end(), [](vector<int>& v1, vector<int>& v2)->bool{
            return v1[1] < v2[1];
        });
        for (int i = 1; i < intervals.size(); ++i) {
            if (intervals[i][0] < intervals[i-1][1]) return false;
        }
        return true;
    }
};