---
title: "Validate Binary Search Tree"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "bfs", "bst"]
categories: ["algorithm"]
date: 2018-11-10T22:50:21-08:00
draft: false
archive: false
---
Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:
- The left subtree of a node contains only nodes with keys `less than` the node's key.
- The right subtree of a node contains only nodes with keys `greater than` the node's key.
- Both the left and right subtrees must also be binary search trees.
### Example 1
```
Input:
    2
   / \
  1   3
Output: true
```
### Example 2
```
    5
   / \
  1   4
     / \
    3   6
Output: false
```
### Explanation The input is: `[5,1,4,null,null,3,6]`. The root node's value is `5` but its right child's value is `4`.
### Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
# Time - O(n)
# Space - O(n)
class Solution:
    def isValidBST(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        """
        # root is None;
        if not root:
            return True
        return self.validate(root, None, None)

    def validate(self, node, minVal, maxVal):
        # Reaches leftmost/rightmost node;
        if not node:
            return True

        if minVal != None and node.val <= minVal:
            return False

        if maxVal != None and node.val >= maxVal:
            return False

        return self.validate(node.left, minVal, node.val) and self.validate(node.right, node.val, maxVal)
```