class Solution {
public:
    bool exist(vector<vector<char>>& board, string word) {
        for (int i = 0; i < board.size(); ++i) {
            for (int j = 0; j < board[0].size(); ++j) {
                if (board[i][j] == word[0]) {
                    if (dfs(i, j, 0, word, board))
                        return true;
                }
            }
        }
        return false;
    }
    bool dfs(int i, int j, int p, string word, vector<vector<char>>& board) {
        if (p >= word.size()) return true;
        
        if (i < 0) return false;
        if (i >= board.size()) return false;
        if (j < 0) return false;
        if (j >= board[0].size()) return false;
        if (board[i][j] != word[p]) return false;
        
        if (board[i][j] == '.') return false;
        
        board[i][j] = '.';
        
        bool possible = false;
        possible |= dfs(i-1, j, p+1, word, board) ||
                    dfs(i+1, j, p+1, word, board) ||
                    dfs(i, j-1, p+1, word, board) ||
                    dfs(i, j+1, p+1, word, board);
        
        // clean up board
        board[i][j] = word[p];
        
        return possible;
    }
};