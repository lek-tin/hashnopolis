---
title: "Linked List Cycle"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "python", "linked-list"]
categories: ["algorithm"]
date: 2018-10-21T23:07:55-07:00
draft: false
archive: false
---
Given a linked list, determine if it has a cycle in it.

**Follow up:**
Can you solve it without using extra space?   
**Solution:**
```python
# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def hasCycle(self, head):
        """
        :type head: ListNode
        :rtype: bool
        """
        slow = head
        fast = head
        while fast:
            if fast and not fast.next:
                return False
            fast = fast.next.next
            slow = slow.next
            if fast == slow:
                return True
        return False
```