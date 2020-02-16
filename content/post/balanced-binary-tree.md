---
title: "Balanced Binary Tree"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "binary-tree"]
categories: ["algorithm"]
date: 2020-02-15T20:14:50-08:00
lastmod: 2020-02-15T20:14:50-08:00
draft: false
archive: false
---
Given a binary tree, determine if it is height-balanced.  

For this problem, a height-balanced binary tree is defined as:  
> a binary tree in which the left and right subtrees of every node differ in height by no more than `1`.  

### Example 1:
```
Given the following tree [3,9,20,null,null,15,7]:

    3
   / \
  9  20
    /  \
   15   7
Return true.
```

### Example 2:
```
Given the following tree [1,2,2,3,3,null,null,4,4]:

       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
Return false.
```

### Solution
Top-down recursion
Time complexity: O(nlogn). We can calculate this using `T(h) = T(h−1) + T(h−2) + 1`, height denoted as `h`.
Space complexity: O(n)
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def isBalanced(self, root: TreeNode) -> bool:
        if not root:
            return True

        lh = self.getHeight(root.left)
        rh = self.getHeight(root.right)

        if abs(lh-rh) <= 1 and self.isBalanced(root.left) and self.isBalanced(root.right):
            return True
        return False

    def getHeight(self, root):
        if not root:
            return 0

        return max(self.getHeight(root.left), self.getHeight(root.right)) + 1
```
Bottom-up recurssion
Time complexity: O(n).
Space complexity: O(n)
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def isBalanced(self, root: TreeNode) -> bool:
        return self.traverse(root)[0]

    def traverse(self, root):
        if not root:
            return True, -1

        isLeftTreeBalanced, leftHeight = self.traverse(root.left)
        if not isLeftTreeBalanced:
            return False, 0

        isRightTreeBalanced, rightHeight = self.traverse(root.right)
        if not isRightTreeBalanced:
            return False, 0

        return abs(leftHeight-rightHeight)<=1, max(leftHeight, rightHeight)+1
```