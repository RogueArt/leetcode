/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* mergeKLists(vector<ListNode*>& lists) {
        if (lists.size() == 0) return nullptr;
        int p = 0;
        while (p+2 <= lists.size()) {
            lists.push_back(mergeTwo(lists[p], lists[p+1]));
            p += 2;
        }
        return lists.back();
    }
    ListNode *mergeTwo(ListNode *l1, ListNode *l2) {
        if (l1 == nullptr) return l2;
        else if (l2 == nullptr) return l1;
        
        if (l1->val < l2->val) {
            l1->next = mergeTwo(l1->next, l2);
            return l1;
        } else {
            l2->next = mergeTwo(l1, l2->next);
            return l2;
        }
    }
};