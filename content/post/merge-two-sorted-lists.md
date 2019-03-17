---
title: "Merge Two Sorted Lists"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "linked-list", "merge"]
categories: ["algorithm"]
date: 2018-10-25T23:43:25-07:00
draft: false
archive: false
---
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

### Example:
```
Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
```
### Solution:
```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        if (l1 == null) return l2;
        if (l2 == null) return l1;

        ListNode dummy = new ListNode(0);
        ListNode temp = dummy;

        while (l1 != null && l2 != null) {
            if (l1.val < l2.val) {
                temp.next = l1;
                l1 = l1.next;
            } else {
                temp.next = l2;
                l2 = l2.next;
            }
            temp = temp.next;
        }

        if (l1 != null) {
            temp.next = l1;
        }

        if (l2 != null) {
            temp.next = l2;
        }

        return dummy.next;
    }
}
```
```python
class Solution:
    def mergeTwoLists(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        if l1 == None:
            return l2

        if l2 == None:
            return l1

        root = ListNode(0)
        temp = root

        while l1 and l2:
            if l1.val > l2.val:
                temp.next = l2
                l2 = l2.next
            else:
                temp.next = l1
                l1 = l1.next
            temp = temp.next

        if l1:
            temp.next = l1
        if l2:
            temp.next = l2

        return root.next
```