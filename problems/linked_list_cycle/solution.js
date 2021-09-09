/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function(head) {
    let [ptr1, ptr2] = [head, head]
    
    // Utilize Floyd's cycle detection algorithm
    while (ptr1 !== null && ptr2 !== null && ptr2.next !== null) {
        ptr1 = ptr1.next
        ptr2 = ptr2.next.next
        
        // If they're both the same, there's a loop
        if (ptr1 === ptr2) return true
    }
    
    return false
};