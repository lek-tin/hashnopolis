---
title: "Convert Sorted List to Binary Search Tree"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "dfs"]
categories: ["algorithm"]
date: 2019-10-09T23:51:44-07:00
lastmod: 2019-10-09T23:51:44-07:00
draft: false
archive: false
---
Given a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.  

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than `1`.  

### Example:
```
Given the sorted linked list: [-10,-3,0,5,9],

One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5
```

### Solution
python
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    root = None
    def sortedListToBST(self, head: ListNode) -> TreeNode:
        if not head:
            return None
        curr = head
        size = 0
        while curr:
            curr = curr.next
            size += 1
        self.root = head
        return self.buildSubtree(0, size-1)

    def buildSubtree(self, left, right):
        if left > right:
            return None

        mid = left + (right-left)//2
        leftRoot = self.buildSubtree(left, mid-1)

        currNode = TreeNode(self.root.val)
        currNode.left = leftRoot
        self.root = self.root.next

        rightRoot = self.buildSubtree(mid+1, right)
        currNode.right = rightRoot

        return currNode
```