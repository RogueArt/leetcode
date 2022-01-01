class Solution {
public:
    int numIslands(vector<vector<char>>& grid) {
        int n = 0;
        for (int i = 0; i < grid.size(); ++i) {
            for (int j = 0; j < grid[0].size(); ++j) {
                if (grid[i][j] == '1') {
                    floodfill(i, j, grid);
                    ++n;
                }
            }
        }
        return n;
    }
    void floodfill(int i, int j, vector<vector<char>>& grid) {
        if (grid[i][j] == '0') return;
        grid[i][j] = '0';
        if (i-1 >= 0) floodfill(i-1, j, grid);
        if (i+1 < grid.size()) floodfill(i+1, j, grid);
        if (j-1 >= 0) floodfill(i, j-1, grid);
        if (j+1 < grid[0].size()) floodfill(i, j+1, grid);
    }
};