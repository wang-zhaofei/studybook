/**
 * @param {ListNode} head
 * @return {number[]}
 */
 var reversePrint = function (head) {
    let nums = []
    let node = head
    //้ๅ้พ่กจ
    while(node !== null) {
        nums.unshift(node.val)
        node = node.next
    }
    return nums
}