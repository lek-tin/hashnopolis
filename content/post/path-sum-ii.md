---
title: "Path Sum II"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "dfs"]
categories: ["algorithm"]
date: 2019-11-30T01:51:33-08:00
lastmod: 2019-11-30T01:51:33-08:00
draft: false
archive: false
---
Given a binary tree and a sum, find all **root-to-leaf** paths where each path's sum equals the given sum.

**Note:** A leaf is a node with no children.

### Example:
Given the below binary tree and `sum = 22`,
```
      5
     / \
    4   8
   /   / \
  11  13  4
 /  \    / \
7    2  5   1
```
Return:
```
[
   [5,4,11,2],
   [5,8,4,5]
]
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
    results = []
    def pathSum(self, root: TreeNode, sum: int) -> List[List[int]]:
        self.dfs(root, 0, sum, [])
        # return the global results
        return self.results

    def dfs(self, root, partial, sum, result):
        # root is null, return
        if not root:
            return
        # Update partial and result
        partial += root.val
        newResult = list(result+[root.val])

        # sum found
        if partial == sum and root.left is None and root.right is None:
            self.results.append(newResult)
        # go to left child node if it exists
        if root.left:
            self.dfs(root.left, partial, sum, newResult)
        # go to right child node if it exists
        if root.right:
            self.dfs(root.right, partial, sum, newResult)
```