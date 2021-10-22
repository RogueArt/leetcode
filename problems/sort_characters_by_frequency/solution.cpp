class Solution {
public:
    string frequencySort(string s) {
      map<char, int> counts;
      for (auto &c : s) {
        if (counts.count(c) == 0) counts[c] = 0;
        counts[c]++;
      }
      priority_queue<pair<int, char>> pq;
      for (auto it = counts.begin(); it != counts.end(); ++it) {
        pq.push(pair<int, char>(it->second, it->first)); 
      }
      string ans = "";
      while (pq.size() > 0) {
        for (int i = 0; i < pq.top().first; ++i) {
          ans += pq.top().second;
        }
        pq.pop();
      }
      return ans;
    }
};