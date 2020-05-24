---
title: "Path Sum II"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "dfs"]
categories: ["algorithm"]
date: 2019-11-30T01:51:33-08:00
lastmod: 2020-03-20T01:51:33-08:00
draft: false
archive: false
---
Given a binary tree and a sum, find all **root-to-leaf** paths where each path's sum equals the given sum.

#### NOTE: A leaf is a node with no children.

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
    def pathSum(self, root: TreeNode, sum: int) -> List[List[int]]:
        self.results = []
        self.dfs(root, [], sum)
        return self.results

    def dfs(self, root, partial, remain):
        if not root:
            return

        partial.append(root.val)

        if remain == root.val and not root.left and not root.right:
            self.results.append(partial[:])
        else:
            self.dfs(root.left, partial, remain-root.val)
            self.dfs(root.right, partial, remain-root.val)

        partial.pop()
```