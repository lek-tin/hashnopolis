---
title: "Binary Tree Vertical Order Traversal"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "python", "binary-tree"]
categories: ["algorithm"]
date: 2018-12-30T22:43:56-08:00
draft: false
archive: false
---
Given a binary tree, return the vertical order traversal of its nodes' values. (ie, from top to bottom, column by column).

If two nodes are in the same row and column, the order should be from **left to right.**

**Examples 1:**
```
Input: [3,9,20,null,null,15,7]

   3
  /\
 /  \
 9  20
    /\
   /  \
  15   7 

Output:

[
  [9],
  [3,15],
  [20],
  [7]
]
```
**Examples 2:**
```
Input: [3,9,8,4,0,1,7]

     3
    /\
   /  \
   9   8
  /\  /\
 /  \/  \
 4  01   7 

Output:

[
  [4],
  [9],
  [3,0,1],
  [8],
  [7]
]
```
**Examples 3:**
```
Input: [3,9,8,4,0,1,7,null,null,null,2,5] (0's right child is 2 and 1's left child is 5)

     3
    /\
   /  \
   9   8
  /\  /\
 /  \/  \
 4  01   7
    /\
   /  \
   5   2

Output:

[
  [4],
  [9,5],
  [3,0,1],
  [8,2],
  [7]
]
```
**Solution:**
```python
# https://www.youtube.com/watch?v=PQKkr036wRc
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

#        root: 0
#       /       \
#    left: -1  right: 1

class Solution(object):
    def verticalOrder(self, root):
        """
        :type root: TreeNode
        :rtype: List[List[int]]
        """
        solution = []
        if not root:
            return solution

        colMap = {}

        queue = [(root, 0)]
        while queue:
            curr, col = queue.pop(0)

            if col in colMap:
                colMap[col].append(curr.val)
            else:
                colMap[col] = [curr.val]

            if curr.left:
                queue.append((curr.left, col - 1))
            if curr.right:
                queue.append((curr.right, col + 1))

        for col in sorted(colMap):
            solution.append(colMap[col])

        return solution
```