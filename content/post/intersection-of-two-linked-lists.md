---
title: "Intersection of Two Linked Lists"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "python"]
categories: ["algorithm"]
date: 2018-10-14T23:56:47-07:00
draft: false
archive: false
---
Write a program to find the node at which the intersection of two singly linked lists begins.

For example, the following two linked lists:
```
A:         a1 → a2
                   ↘
                     c1 → c2 → c3
                   ↗
B:    b1 → b2 → b3
```
begin to intersect at node c1.


**Notes:**
If the two linked lists have no intersection at all, return null.
The linked lists must retain their original structure after the function returns.
You may assume there are no cycles anywhere in the entire linked structure.
Your code should preferably run in `O(n)` time and use only `O(1)` memory.
Credits:
Special thanks to @stellari for adding this problem and creating all test cases.
**Solution:**
```python
# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None
#      A:   x steps
#                   ↘
#                     common steps
#                   ↗            ↓
#           y steps ← ← ← ← ← ← ↙
#      --------------------------------
#           x steps ← ← ← ← ← ← ↖
#                   ↘            ↑
#                     common steps
#                   ↗
#      B:   y steps
# Total step for A and B are the same
class Solution(object):
    def getIntersectionNode(self, headA, headB):
        """
        :type head1, head1: ListNode
        :rtype: ListNode
        """
        if headA == None or headB == None:
            return None

        a = headA
        b = headB

        while a != b:
            if a != None and b != None:
                print(a.val, b.val)
            a = a.next if a != None else headB
            b = b.next if b != None else headA

        return a
```