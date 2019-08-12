---
title: "Reverse Linked List"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "linked-list", "iterative", "two-pointers"]
categories: ["algorithm"]
date: 2019-08-10T23:51:13-07:00
draft: false
archive: false
---
Reverse a singly linked list.

### Example:
```
Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
```
### Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?
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
    public ListNode reverseList(ListNode head) {
        ListNode cur = head, prev = null, after = new ListNode(0);
        // null   1  ->  2  -> 3 -> 4 -> 5 -> NULL
        // prev  cur   after
        while (cur != null) {
            after = cur.next;
            cur.next = prev;
            prev = cur;
            // for the last node, after will be null, therefore after this step,
            // the while loop will terminate, and we return prev instead of cur,
            // as it is null at this point.
            cur = after;
        }
        head = prev;
        return head;
    }
}
```
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None
#     null    1  ----  2  ----  3  ----  4  ----  5
#     prev   curr     after
#            prev     curr    after
# https://www.youtube.com/watch?v=D7y_hoT_YZI
class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        prev = None

        while head != None:
            temp = head.next
            head.next = prev
            prev = head
            head = temp

        return prev
```