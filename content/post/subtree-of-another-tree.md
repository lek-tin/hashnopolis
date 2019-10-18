---
title: "Subtree of Another Tree"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "tree"]
categories: ["algorithm"]
date: 2019-10-15T23:55:51-07:00
lastmod: 2019-10-15T23:55:51-07:00
draft: false
archive: false
---
Given two non-empty binary trees s and t, check whether tree `t` has exactly the same structure and node values with a subtree of `s`. A subtree of `s` is a tree consists of a node in `s` and all of this node's descendants. The tree `s` could also be considered as a subtree of itself.

### Example 1:
Given tree `s`:
```
     3
    / \
   4   5
  / \
 1   2
```
Given tree `t`:
```
   4 
  / \
 1   2
```
Return `true`, because `t` has the same structure and node values with a subtree of `s`.

### Example 2:
Given tree `s`:
```
     3
    / \
   4   5
  / \
 1   2
    /
   0
```
Given tree `t`:
```
   4
  / \
 1   2
```
Return `false`.

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def isSubtree(self, s: TreeNode, t: TreeNode) -> bool:
        return self.dfs(s, t)

    def dfs(self, root1, root2):
        if not root1:
            return False

        if root1.val == root2.val:
            if self.checkSameTree(root1, root2):
                return self.checkSameTree(root1,root2)

        return self.dfs(root1.left, root2) or self.dfs(root1.right, root2)

    def checkSameTree(self, root1, root2):
        if not root1 and not root2:
            return True

        if not root1 or not root2:
            return False

        if root1.val != root2.val:
            return False

        return self.checkSameTree(root1.left, root2.left) and \
                self.checkSameTree(root1.right, root2.right)
```