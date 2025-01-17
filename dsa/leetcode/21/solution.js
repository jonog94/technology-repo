/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = (list1, list2) => {
    const head = new ListNode(-1)
    let list = head

    while (list1 && list2) {
        if (list1.val > list2.val) {
            list.next = list2
            list2 = list2.next
        } else {
            list.next = list1
            list1 = list1.next
        }
        list = list.next
    }

    list.next = list1 || list2

    return head.next
}