/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
    let sum = 0
    let carry = 0
    
    const head = new ListNode()
    let res = head
    while (l1 !== null || l2 !== null) {
        const a = (l1 !== null) ? l1.val : 0
        const b = (l2 !== null) ? l2.val : 0
        
        const sumOfBoth = a + b + carry
        
        res.next = new ListNode(sumOfBoth % 10)
        res = res.next
    
        carry = Math.floor(sumOfBoth / 10)
        
        // Go to the child node
        if (l1 !== null) l1 = l1.next
        if (l2 !== null) l2 = l2.next
    }
    
    if (carry > 0) res.next = new ListNode(carry)
        
    return head.next
};