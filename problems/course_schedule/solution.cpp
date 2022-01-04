class Solution {
public:
    bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {
        int indeg[numCourses]; memset(indeg, 0, sizeof(indeg));
        vector<vector<int>> courses; courses.resize(numCourses);
        for (auto &p : prerequisites) {
            courses[p[1]].push_back(p[0]);
            indeg[p[0]]++;
        }
        queue<int> q;
        for (int i = 0; i < numCourses; ++i) {
            if (indeg[i] == 0) q.push(i);
        }
        while (q.size() != 0) {
            int start = q.front(); q.pop();
            for (auto &n : courses[start]) {
                indeg[n]--;
                if (indeg[n] == 0) q.push(n);
            }
        }
        for (int i = 0; i < numCourses; ++i) {
            if (indeg[i] != 0) return false;
        }
        return true;
    }
};