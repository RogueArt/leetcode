/*
// Definition for a Node.
class Node {
public:
    int val;
    vector<Node*> neighbors;
    Node() {
        val = 0;
        neighbors = vector<Node*>();
    }
    Node(int _val) {
        val = _val;
        neighbors = vector<Node*>();
    }
    Node(int _val, vector<Node*> _neighbors) {
        val = _val;
        neighbors = _neighbors;
    }
};
*/

class Solution {
public:
    Node* cloneGraph(Node* node) {
        if (node == nullptr) return node;
        map<int, Node *> visited;
        Node *root = new Node(node->val);
        visited.insert(make_pair(root->val, root));
        clone(root, node, visited);
        return root;
    }
    void clone(Node *root, Node *node, map<int, Node *>& visited) {
        if (node->neighbors.size() == 0) return;
        for (auto &n : node->neighbors) {
            if (visited.count(n->val) == 0) {
                root->neighbors.push_back(new Node(n->val));
                visited.insert(make_pair(n->val, root->neighbors.back()));
                clone(root->neighbors.back(), n, visited);
            } else
                root->neighbors.push_back(visited[n->val]);
        }
    }
};