---
title: "Same Tree"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "binary-tree"]
categories: ["algorithm"]
date: 2018-09-16T15:03:53-07:00
draft: false
archive: false
---
Given two binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

Example 1:
```
Input:     1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

Output: true
```
Example 2:
```
Input:     1         1
          /           \
         2             2

        [1,2],     [1,null,2]

Output: false
```
Example 3:
```
Input:     1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

Output: false
```
### Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def isSameTree(self, p, q):
        """
        :type p: TreeNode
        :type q: TreeNode
        :rtype: bool
        """
        def compareNodes(a, b):
            if (a == None and b == None):
                return True
            """One of the nodes is None, and the other is a valid node"""
            elif ((a and not b) or (not a and b)):
                return False
            else:
                if (a.val == b.val):
                    return compareNodes(a.left, b.left) and compareNodes(a.right, b.right)
                else:
                    return False
        return compareNodes(p, q)
```