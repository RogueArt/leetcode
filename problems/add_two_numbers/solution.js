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

function linkedListToVal(list) {
    let val = BigInt(0)
    let count = BigInt(0)
    
    // Traverse through linked list
    while (list != undefined) {
        // Add value to stack as power of 10
        val += BigInt(list.val) * (BigInt(10) ** count)
        count += BigInt(1)
        
        // Go to next node
        list = list.next
    }
    return val
}

const addTwoNumbers = (l1, l2) => {
    let sum = linkedListToVal(l1) + linkedListToVal(l2)
    console.log(linkedListToVal(l1), linkedListToVal(l2))
    
    // Create the first head node
    const head = new ListNode(sum % BigInt(10))
    sum /= BigInt(10)
    
    // Go through rest of values    
    let pointer = head
    while (sum !== BigInt(0)) {
        // Get the remainder, floor the sum
        let remainder = sum % BigInt(10)
        sum /= BigInt(10)
        
        // Create a new node for next 
        pointer.next = new ListNode(remainder)
        
        // Set pointer to next
        pointer = pointer.next        
    }
    
    return head
};