---
title: "Flatten Binary Tree to Linked List"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "binary-tree"]
categories: ["algorithm"]
date: 2020-03-24T03:28:41-07:00
lastmod: 2020-03-24T03:28:41-07:00
draft: false
archive: false
---
Given a binary tree, flatten it to a linked list **in-place**.  

For example, given the following tree:

```

    1
   / \
  2   5
 / \   \
3   4   6
```

The flattened tree should look like:

```
1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6
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
    def flatten(self, root: TreeNode) -> None:
        """
        Do not return anything, modify root in-place instead.
        """
        self.dfs(root)

    def dfs(self, root):
        if not root:
            return None

        # leaf node
        if not root.left and not root.right:
            return root

        leftTail = self.dfs(root.left)
        rightTail = self.dfs(root.right)

        if leftTail:
            leftTail.right = root.right
            root.right = root.left
            root.left = None

        return rightTail if rightTail else leftTail
```