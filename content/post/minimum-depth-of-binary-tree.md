---
title: "Minimum Depth of Binary Tree"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "java", "binary-tree", "depth-first-search"]
categories: ["algorithm"]
date: 2019-02-12T16:58:46-08:00
draft: false
archive: false
---
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

### Example:

Given binary tree `[3,9,20,null,null,15,7]`,
```
    3
   / \
  9  20
    /  \
   15   7
return its minimum depth = 2.
```

### Solution:
Recursion
```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {

    public int minDepth(TreeNode root) {
        if (root == null) return 0;
        int left = minDepth(root.left);
        int right = minDepth(root.right);
        return (left == 0 || right == 0) ? left + right + 1 : Math.min(left, right) + 1;
    }

}
```
DFS using stack
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def minDepth(self, root: TreeNode) -> int:
        stack = []

        if root:
            stack.append((root, 1))

        minDepth = math.inf
        while stack:
            root, currDepth = stack.pop()
            if root:
                if not root.left and not root.right:
                    minDepth = min(minDepth, currDepth)
                stack.append((root.left, currDepth+1))
                stack.append((root.right, currDepth+1))

        return minDepth if minDepth != math.inf else 0
```
BFS using queue
```python
from collections import deque
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def minDepth(self, root: TreeNode) -> int:
        queue = deque([])

        if not root:
            return 0

        queue.append((root, 1))

        while deque:
            root, currDepth = queue.popleft()
            if root:
                if not root.left and not root.right:
                    return currDepth
                queue.append((root.left, currDepth+1))
                queue.append((root.right, currDepth+1))
```