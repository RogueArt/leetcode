/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = (head) => {
    let [prevNode, curNode] = [null, head]
    
    while (curNode !== null) {
        // Set the next node of current to previous
        const nextNode = curNode.next
        curNode.next = prevNode
        
        // Move each node one deeper into list
        prevNode = curNode
        curNode = nextNode
    }
    
    // prevNode will be the new head
    return prevNode
};