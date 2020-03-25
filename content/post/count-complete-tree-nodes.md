---
title: "Count Complete Tree Nodes"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "tree"]
categories: ["algorithm"]
date: 2019-10-16T00:00:30-07:00
lastmod: 2019-10-16T00:00:30-07:00
draft: false
archive: false
---
Given a **complete** binary tree, count the number of nodes.

#### Note

__Definition of a complete binary tree from Wikipedia__:
In a complete binary tree every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between `1` and 2<sup>h</sup> nodes inclusive at the last level h.

### Example:
```
Input:
    1
   / \
  2   3
 / \  /
4  5 6

Output: 6
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
    lastLevel = 0
    nthNodeOnLastLevel = 0

    def countNodes(self, root: TreeNode) -> int:
        if not root:
            return 0
        self.dfs(root, 0)
        ## missingNodes = 2^(self.lastLevel) - self.nthNodeOnLastLevel
        ## totalNodes = 2^(self.lastLevel+1) - 1 - missingNodes
        print("lastLevel:", self.lastLevel, "nthNodeOnLastLevel:", self.nthNodeOnLastLevel)
        totalNodes = 2**(self.lastLevel) + self.nthNodeOnLastLevel - 1
        return totalNodes

    def dfs(self, root, level):
        if not root.left and not root.right:
            if self.lastLevel < level:
                self.lastLevel = level
            if self.lastLevel == level:
                self.nthNodeOnLastLevel += 1
            return True

        leftChild = self.dfs(root.left, level+1) if root.left else False
        rightChild = self.dfs(root.right, level+1) if root.right else False

        return leftChild and rightChild
```