---
title: "Add Two Numbers"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "python", "linked-list"]
categories: ["algorithm"]
date: 2019-01-21T23:38:03-08:00
draft: false
archive: false
---
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

**Example:**
```
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
```
**Solution:**
```python
# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None
# Time: O(n)
# Space: O(1)
class Solution(object):
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        c1 = l1
        c2 = l2
        head = ListNode(0)
        dummy = head
        sum = 0
        while c1 != None or c2 != None:
            sum //= 10
            print(sum)
            if c1 != None:
                sum += c1.val
                c1 = c1.next

            if c2 != None:
                sum += c2.val
                c2 = c2.next

            dummy.next = ListNode(sum % 10)
            dummy = dummy.next

        if sum//10 == 1:
            dummy.next = ListNode(1)

        return head.next
```
