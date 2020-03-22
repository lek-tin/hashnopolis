---
title: "Binary Tree Level Order Traversal"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "binary-tree"]
categories: ["algorithm"]
date: 2018-09-13T22:59:49+08:00
draft: false
archive: false
---
Given a binary tree, return the _level order_ traversal of its nodes' values. (ie, from left to right, level by level).

### Example
```
Given binary tree `[3,9,20,null,null,15,7]`,
    3
   / \
  9  20
    /  \
   15   7
```
return its level order traversal as:
```
[
  [3],
  [9,20],
  [15,7]
]
```

### Solution (recursion)

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def levelOrder(self, root):
        """
        :type root: TreeNode
        :rtype: List[List[int]]
        """
        res = []

        def sort(root, level):
            if root != None:
                if level == len(res):
                    res.append([])
                res[level].append(root.val)
                sort(root.left, level+1)
                sort(root.right, level+1)

        sort(root, 0)

        return res
```

### Solution (bfs)

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def levelOrderBottom(self, root: TreeNode) -> List[List[int]]:
        if not root:
            return []
        res = []

        next_level = [root]
        while next_level:
            curr_level = next_level
            res.append(map(lambda x: x.val, curr_level))
            next_level = []
            for node in curr_level:
                if node.left:
                    next_level.append(node.left)
                if node.right:
                    next_level.append(node.right)

        return res[::-1]
```