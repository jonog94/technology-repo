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
const deleteDuplicates = (head) => {
    let linkedList = head

    while (linkedList && linkedList.next) {
        if (linkedList.val === linkedList.next.val) {
            linkedList.next = linkedList.next.next
        } else {
            linkedList = linkedList.next
        }
    }

    return head
}