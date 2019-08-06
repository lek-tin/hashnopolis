---
title: "Binary Tree Zigzag Level Order Traversal"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "binary-tree"]
categories: ["algorithm"]
date: 2019-01-25T00:12:07-08:00
draft: false
archive: false
---
Given a binary tree, return the _zigzag level order traversal_ of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

### Example
Given binary tree `[3,9,20,null,null,15,7]`,
```
    3
   / \
  9  20
    /  \
   15   7
```
return its zigzag level order traversal as:
```
[
  [3],
  [20,9],
  [15,7]
]
```
### Solution:
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def zigzagLevelOrder(self, root):
        """
        :type root: TreeNode
        :rtype: List[List[int]]
        """
        res = []

        def iterate(node, level):
            if node is None:
                return

            if level == len(res):
                res.append([node.val])
            elif level>>1<<1 == level:
                # print("even level")
                res[level].append(node.val)
            else:
                # print("odd level")
                res[level].insert(0, node.val)

            iterate(node.left, level+1)
            iterate(node.right, level+1)

        iterate(root, 0)
        return res
```
