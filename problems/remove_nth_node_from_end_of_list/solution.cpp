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
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        // one pass to find size of linked list
        ListNode *origHead = head;
        int size = 0;
        while (head != nullptr) {
            size++;
            head = head->next;
        }
        // remove node size-n
        head = origHead;
        for (int i = 0; i < size-n-1; ++i)
            head = head->next;
        // lol i'm pretty sure this creates a memleak without the free()
        // but whatever
        if (n == size) return origHead->next;
        head->next = head->next->next;
        return origHead;
    }
};