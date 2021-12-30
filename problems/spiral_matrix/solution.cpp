class Solution {
public:
    vector<int> spiralOrder(vector<vector<int>>& matrix) {
        int rows = matrix.size(), cols = matrix[0].size();
        int nNegative = 0;
        vector<int> ans;
        pair<int, char> p = make_pair(-101, 'R');
        int i = 0, j = -1;
        while (nNegative < 2) {
            p = getNext(p.second, i, j, matrix, rows, cols);
            if (p.first != -101)
                switch(p.second) {
                    case 'R': j += 1; break;
                    case 'D': i += 1; break;
                    case 'L': j -= 1; break;
                    case 'U': i -= 1; break;
                }
            if (p.first == -101) nNegative++;
            else {
                ans.push_back(p.first);
                nNegative = 0;
            }
        }
        return ans;
    }
    pair<int, char> getNext(char dir, int i, int j, vector<vector<int>>& mat, int rows, int cols) {
        switch(dir) {
            case 'R':
                if (j+1 < cols && mat[i][j+1] != -101) {
                    int next = mat[i][j+1];
                    mat[i][j+1] = -101;
                    return make_pair(next, 'R');
                }
            case 'D':
                if (i+1 < rows && mat[i+1][j] != -101) {
                    int next = mat[i+1][j];
                    mat[i+1][j] = -101;
                    return make_pair(next, 'D');
                }
            case 'L':
                if (j-1 >= 0 && mat[i][j-1] != -101) {
                    int next = mat[i][j-1];
                    mat[i][j-1] = -101;
                    return make_pair(next, 'L');
                }
            case 'U':
                if (i-1 >= 0 && mat[i-1][j] != -101) {
                    int next = mat[i-1][j];
                    mat[i-1][j] = -101;
                    return make_pair(next, 'U');
                } else {
                    return make_pair(-101, 'R');
                }
        }
        return make_pair(-101, 'R');
    }
};