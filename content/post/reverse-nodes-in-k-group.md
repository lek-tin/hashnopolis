---
title: "Reverse Nodes in K Group"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "linked-list"]
categories: ["algorithm"]
date: 2019-08-11T18:04:36-08:00
draft: false
archive: false
---
Given a linked list, reverse the nodes of a linked list `k` at a time and return its modified list.

`k` is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of `k` then left-out nodes in the end should remain as it is.

### Example
Given this linked list: `1->2->3->4->5`  
For `k = 2`, you should return: `2->1->4->3->5`  
For `k = 3`, you should return: `3->2->1->4->5`  
#### Note
- Only constant extra memory is allowed.
- You may not alter the values in the list's nodes, only nodes itself may be changed.
### Solution
```python
# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

#   k = 3,                       next
#  dummy -->[1 ----> 2 -------> 3]  -------> 4 ---------> 5 --> Null
#   prev   tail    curr   nextNode         last
#
#  dummy -->[2 ----> 1 -------> 3]  -------> 4 ---------> 5 --> Null
#                              curr
#
#  dummy -->[3 ----> 2 -------> 1]  -------> 4 ---------> 5 --> Null
#                              tail        curr/last
#                                          new prev

class Solution(object):
    def reverseKGroup(self, head, k):
        """
        :type head: ListNode
        :type k: int
        :rtype: ListNode
        """
        if head is None:
            return None
        dummy = ListNode(0)
        dummy.next = head
        prev = dummy
        while prev is not None:
            prev = self.reverse(prev, k)
        return dummy.next

    def reverse(self, prev, k):
        last = prev
        # k+1 steps, in our case, k = 1, last = node(4)
        for i in range(k+1):
            last = last.next
            # last is None which means we have reached the end, and at the same time, the stack length is < k, so we don't need to reverse the stack
            if i != k and last == None:
                return None
        tail = prev.next
        curr = prev.next.next
        while curr != last:
            nextNode = curr.next
            curr.next = prev.next
            prev.next = curr
            tail.next = nextNode
            curr = nextNode
        # when curr == last, stack has been reversed completely
        # after the first iteration, tail is node(1), which is the prev for the next k-long stack
        return tail
```
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def reverseKGroup(self, head: ListNode, k: int) -> ListNode:
            dummy = ListNode(0)
            dummy.next = head
            head = dummy
            while True:
                head = self.reverse(head, k)
                if head == None:
                    break
            return dummy.next

    # head -> [Node1 -> Node2 -> ... -> NodeK] -> NodeKPlus
    def reverse(self, head, k):
        # kth node
        nodeK = head
        for i in range(k):
            # Always check validity of nodeK
            if nodeK == None:
                return None
            nodeK = nodeK.next
        # Always check validity of nodeK
        if nodeK == None:
            return None
        # Get (k+1)th node
        node1 = head.next
        nodeKPlus = nodeK.next
        # Reverse the [Node1 ... NodeK]
        prev = None
        curr = node1
        while curr != nodeKPlus:
            temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp
        # connecting two sides
        head.next = nodeK
        node1.next = nodeKPlus
        return node1
```