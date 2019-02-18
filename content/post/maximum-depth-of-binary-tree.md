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
return its minimum depth = 3.
```

### Solution:
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
    public int maxDepth(TreeNode root) {
        if (root == null) return 0;
        int left = maxDepth(root.left);
        int right = maxDepth(root.right);

        return (left == 0 || right == 0) ? left + right + 1 : Math.max(left, right) + 1;
    }
}
```