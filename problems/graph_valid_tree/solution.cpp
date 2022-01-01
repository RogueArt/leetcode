class Solution {
public:
    bool *visited;
    bool validTree(int n, vector<vector<int>>& edges) {
        vector<vector<int>> adj;
        adj.resize(n);
        for (int i = 0; i < edges.size(); ++i) {
            adj[edges[i][0]].push_back(edges[i][1]);
            adj[edges[i][1]].push_back(edges[i][0]);
        }
        
        visited = (bool *)malloc(sizeof(bool)*n);
        memset(visited, 0, sizeof(bool)*n);
        dfs(0, adj);
        bool seen = true;
        for (int i = 0; i < n; ++i) seen = seen & visited[i];
        return seen & (edges.size() == n-1);
    }
    void dfs(int node, vector<vector<int>>& adj) {
        if (visited[node]) return;
        visited[node] = true;
        for (auto &n : adj[node]) dfs(n, adj);
    }
};