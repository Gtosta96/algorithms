/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  l1 = l1 || [];
  l2 = l2 || [];

  const result = [];
  const length = l1.length > l2.length ? l1.length : l2.length;
  for (var i = 0; i < length; i++) {

    const currL1Item = l1[i];
    const currL2Item = l2[i];

    if (currL1Item) result.push(currL1Item);
    if (currL2Item) result.push(currL2Item);
  }

  return result;
};

console.log(mergeTwoLists([1,2,4], [1,3,4]));