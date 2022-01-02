class Solution {
public:
    bool *visited;
    int countComponents(int n, vector<vector<int>>& edges) {
        vector<vector<int>> adj; adj.resize(n);
        for (auto &e : edges) {
            adj[e[0]].push_back(e[1]);
            adj[e[1]].push_back(e[0]);
        }
        
        visited = (bool *)malloc(n*sizeof(bool));
        memset(visited, 0, sizeof(bool)*n);
        int cc = 0;
        for (int i = 0; i < n; ++i) {
            if (!visited[i]) {
                dfs(i, adj);
                cc++;
            }
        }
        free(visited);
        return cc;
    }
    void dfs(int r, vector<vector<int>>& adj) {
        if (visited[r]) return;
        visited[r] = true;
        for (auto &n : adj[r]) 
            dfs(n, adj);
    }
};