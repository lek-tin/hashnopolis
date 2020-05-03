---
title: "Longest Univalue Path"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "dfs"]
categories: ["algorithm"]
date: 2020-04-29T04:11:27-07:00
lastmod: 2020-04-29T04:11:27-07:00
draft: false
archive: false
---

Given a binary tree, find the length of the longest path where each node in the path has the same value. This path may or may not pass through the root.  

The length of path between two nodes is represented by the number of edges between them.  

### Example 1:

```
Input:

              5
             / \
            4   5
           / \   \
          1   1   5
Output: 2
```

### Example 2:

```
Input:

              1
             / \
            4   5
           / \   \
          4   4   5
Output: 2
```

#### Note:

- The given binary tree has not more than 10000 nodes. The height of the tree is not more than 1000.

### Solution

Java
```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    private int longest = 0;
    public int longestUnivaluePath(TreeNode root) {
        if (root == null) return 0;
        dfs(root);
        return longest;
    }

    private int dfs(TreeNode root) {
        if (root == null) return 0;

        int left = dfs(root.left);
        int right = dfs(root.right);
        int l = 0;
        int r = 0;

        if (root.left != null && root.val == root.left.val) {
            l = left + 1;
        }
        if (root.right != null && root.val == root.right.val) {
            r = right + 1;
        }
        if (l + r > longest) longest = l + r;

        return Math.max(l, r);
    }
}
```
