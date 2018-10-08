---
title: "Reverse Linked List II"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "python", "linked-list"]
categories: ["algorithm"]
date: 2018-09-30T22:19:41-07:00
draft: false
archive: false
---
Reverse a linked list from position m to n. Do it in one-pass.

Note: 1 ≤ m ≤ n ≤ length of list.

Example:
```
Input: 1->2->3->4->5->NULL, m = 2, n = 4

Output: 1->4->3->2->5->NULL
```
*Solution:**
```python
class Solution:
    def reverseBetween(self, head, m, n):
        """
        :type head: ListNode
        :type m: int
        :type n: int
        :rtype: ListNode
        """
        dummy = ListNode(None)
        dummy.next = head
        pre = dummy
        curr = dummy.next
        for i in range(1, m):
            curr = curr.next
            pre = pre.next
        for i in range(n-m):
            temp = curr.next
            curr.next = temp.next
            temp.next = pre.next
            pre.next = temp
        return dummy.next
```