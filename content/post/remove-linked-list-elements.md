---
title: "Remove Linked List Elements"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "python", "two-pointers", "linked-list"]
categories: ["algorithm"]
date: 2018-09-18T16:07:09-07:00
draft: false
archive: false
---
Remove all elements from a linked list of integers that have value `val`.

**Example:**
```
Input:  1->2->6->3->4->5->6, val = 6
Output: 1->2->3->4->5
```
**Solution:**
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def removeElements(self, head, val):
        """
        :type head: ListNode
        :type val: int
        :rtype: ListNode
        """
        pre = ListNode(0)
        pre.next = head
        pos = pre
        while pos.next != None:
            if pos.next.val == val:
                pos.next = pos.next.next
            else:
                pos = pos.next
        return pre.next
```
