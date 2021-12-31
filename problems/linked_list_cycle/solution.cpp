/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    bool hasCycle(ListNode *head) {
        if (head == nullptr || head->next == nullptr) return false;
        ListNode dummy;
        dummy.next = head;
        ListNode *t = &dummy, *h = &dummy;
        int it = 0;
        while (h != nullptr && (t != h || it == 0)) {
            t = t->next; h = h->next;
            if (h != nullptr) h = h->next;
            ++it;
        }
        if (t == h) return true;
        else return false;
    }
};