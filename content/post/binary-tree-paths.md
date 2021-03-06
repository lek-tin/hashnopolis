---
title: "Binary Tree Paths"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "binary-tree"]
categories: ["algorithm"]
date: 2018-09-13T23:00:42+08:00
draft: false
archive: false
---
Given a binary tree, return all root-to-leaf paths.

Note: A leaf is a node with no children.

### Example
```
Input:

   1
 /   \
2     3
 \
  5

Output: ["1->2->5", "1->3"]
```
Explanation: All root-to-leaf paths are: 1->2->5, 1->3

### Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def binaryTreePaths(self, root):
        """
        :type root: TreeNode
        :rtype: List[str]
        """
        res = []
        def traverse(root, path):
            if root == None:
                return
            
            path += str(root.val) + "->"
        
            if root.left == None and root.right == None:
                res.append("".join(path[:-2]))
                return
            else:
                traverse(root.left, list(path))
                traverse(root.right, list(path))
            
        traverse(root, "")
        return res
            
```