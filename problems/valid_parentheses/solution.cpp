class Solution {
public:
    bool isValid(string s) {
        stack<char> stk;
        for (int i = 0; i < s.size(); ++i) {
            switch (s[i]) {
                case '(': case '{': case '[':
                    stk.push(s[i]);
                    break;
                case ')':
                    if (stk.size() == 0) return false;
                    if (stk.top() == '(') stk.pop();
                    else return false;
                    break;
                case '}':
                    if (stk.size() == 0) return false;
                    if (stk.top() == '{') stk.pop();
                    else return false;
                    break;
                case ']':
                    if (stk.size() == 0) return false;
                    if (stk.top() == '[') stk.pop();
                    else return false;
                    break;
            }
        }
        if (stk.size() == 0) return true;
        else return false;
    }
};