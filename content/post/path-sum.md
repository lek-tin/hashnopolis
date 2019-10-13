---
title: "Path Sum"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "dfs"]
categories: ["algorithm"]
date: 2019-10-12T17:43:14-07:00
lastmod: 2019-10-12T17:43:14-07:00
draft: false
archive: false
---
Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

### Note:
A leaf is a node with no children.

### Example:
```
Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1
return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.
```

### Solution
python DFS
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def hasPathSum(self, root: TreeNode, sum: int) -> bool:
        return self.helper(root, 0, sum)

    def helper(self, root, currSum, targetSum):
        if not root:
            return False

        currSum += root.val
        if not root.left and not root.right:
            return currSum == targetSum

        return self.helper(root.left, currSum, targetSum) or self.helper(root.right, currSum, targetSum)
```