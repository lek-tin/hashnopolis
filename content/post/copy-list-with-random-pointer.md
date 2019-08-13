---
title: "Copy List With Random Pointer"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "linked-list", "hashmap"]
categories: ["algorithm"]
date: 2019-08-11T23:34:11-08:00
draft: false
archive: false
---
A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

Return a deep copy of the list.

### Solution
Solution 1: Insert cloned nodes in between original nodes then connect the cloned nodes
```python
# Definition for singly-linked list with a random pointer.
# class RandomListNode(object):
#     def __init__(self, x):
#         self.label = x
#         self.next = None
#         self.random = None
class Solution(object):
    def copyRandomList(self, head):
        """
        :type head: RandomListNode
        :rtype: RandomListNode
        """
        # corner case
        if head == None:
            return None

        # First pass: for each node in the original list, inset a copied node between the node tne node.next
        cur = head
        while cur != None:
            # Make a copy of cur node, inset it to the middle of cur and cur.next
            copy = RandomListNode(cur.label)
            copy.next = cur.next
            # copy.random = cur.random
            cur.next = copy
            cur = cur.next.next

        #second pass: link the random pointer for the copied node
        cur = head
        while cur != None:
            if cur.random != None:
                # now points to the "newly" created node, node'
                cur.next.random = cur.random.next
            cur = cur.next.next

        # third pass: extract the copied node
        cur = head
        dummy = RandomListNode(0)
        copyPrev = dummy
        while cur != None:
            copyPrev.next = cur.next
            cur.next = cur.next.next
            copyPrev = copyPrev.next
            cur = cur.next

        return dummy.next
```
Solution 2: using hashmap
```python
"""
# Definition for a Node.
class Node:
    def __init__(self, val, next, random):
        self.val = val
        self.next = next
        self.random = random
"""
class Solution:
    def copyRandomList(self, head: 'Node') -> 'Node':
        if head is None:
            return None

        copy = Node(head.val, None, None)
        mapping = {head: copy}

        while head is not None:
            clone = mapping[head]
            # Copy next pointer
            if head.next in mapping:
                clone.next = mapping[head.next]
            else:
                newNode = None if head.next is None else Node(head.next.val, None, None)
                clone.next = newNode
                mapping[head.next] = newNode
            # Copy random pointer
            if head.random in mapping:
                clone.random = mapping[head.random]
            else:
                newNode = None if head.random is None else Node(head.random.val, None, None)
                clone.random = newNode
                mapping[head.random] = newNode
            # Move onto the next linked node
            head = head.next

        return copy
```