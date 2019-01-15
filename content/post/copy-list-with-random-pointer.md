---
title: "Copy List With Random Pointer"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "python", "linked-list"]
categories: ["algorithm"]
date: 2019-01-07T23:34:11-08:00
draft: true
archive: false
---
A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

Return a deep copy of the list.

**Solution:**
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