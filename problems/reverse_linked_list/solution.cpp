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
    ListNode *h;
    ListNode* reverseList(ListNode* head) {
        if (head == nullptr) return head;
        reverse(head)->next = nullptr;
        return h;
    }
    ListNode *reverse(ListNode *head) {
        if (head->next == nullptr) {
            h = head;
            return head;
        }
        ListNode *p = reverse(head->next);
        p->next = head;
        return p->next;
    }
};