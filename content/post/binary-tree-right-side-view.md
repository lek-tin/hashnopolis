---
title: "Binary Tree Right Side View"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "binary-tree"]
categories: ["algorithm"]
date: 2018-09-13T23:03:06+08:00
draft: false
archive: false
---
Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

**Example:**
```
Input: [1,2,3,null,5,null,4]
Output: [1, 3, 4]
Explanation:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
```
**Solution:**
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def rightSideView(self, root):
        """
        :type root: TreeNode
        :rtype: List[int]
        """
        res = []

        def pick(root, level):
            if root != None:
                if level == len(res):
                    res.append(root.val)
                pick(root.right, level + 1)
                pick(root.left, level + 1)

        pick(root, 0)
        return res
```
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def rightSideView(self, root):
        """
        :type root: TreeNode
        :rtype: List[int]
        """
        res = []
        self.iterate(res, root, 0)
        return res

    def iterate(self, res, node, level):
        if node == None:
            return

        if len(res) == level:
            res.append(node.val)
        else:
            res[level] = node.val

        if node.left:
            self.iterate(res, node.left, level+1)
        if node.right:
            self.iterate(res, node.right, level+1)
```