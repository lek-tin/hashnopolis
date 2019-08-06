---
title: "Remove Nth Node From End of List"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "linked-list", "slow-fast-pointers", "two-pointers"]
categories: ["algorithm"]
date: 2018-08-20T23:33:38+08:00
draft: false
archive: false
---
Given a linked list, remove the n-th node from the end of list and return its head.

### Example
```
Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.
```
### Note

Given n will always be valid.

### Follow-up

Could you do this in one pass?

### Solution
```python
# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def removeNthFromEnd(self, head, n):
        """
        :type head: ListNode
        :type n: int
        :rtype: ListNode
        """
        start = ListNode(0)
        slow = start
        fast = start
        slow.next = head

        # let fast move n steps forward
        for i in range(n+1):
            fast = fast.next

        while fast != None:
            slow = slow.next
            fast = fast.next

        slow.next = slow.next.next

        return start.next
```