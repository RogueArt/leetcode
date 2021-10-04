class Solution {
public:
    int nAround(int r, int c, vector<vector<int>>& grid) {
      int n = 4;
      if (c > 0 && grid[r][c-1] == 1) n--;
      if (c < grid[0].size()-1 && grid[r][c+1] == 1) n--;
      if (r > 0 && grid[r-1][c] == 1) n--;
      if (r < grid.size()-1 && grid[r+1][c] == 1) n--;
      return n;
    }
    int islandPerimeter(vector<vector<int>>& grid) {
      int perim = 0;
      for (int i = 0; i < grid.size(); ++i) {
        for (int j = 0; j < grid[0].size(); ++j) {
          if (grid[i][j] == 1) perim += nAround(i, j, grid);
        }
      }
      return perim;
    }
};