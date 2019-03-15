---
title: "Diameter of Binary Tree"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "dfs", "binary-tree"]
categories: ["algorithm"]
date: 2019-03-09T18:50:51-08:00
draft: false
archive: false
---
Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

### Example:
```
Given a binary tree 
          1
         / \
        2   3
       / \     
      4   5    
Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].
```
### Solution
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
    private int maxDiameter = 0;

    public int diameterOfBinaryTree(TreeNode root) {
        if (root == null) return 0;

        helper(root);

        return maxDiameter;
    }

    private int helper(TreeNode node) {
        if (node == null) return - 1;

        int leftHeight = helper(node.left) + 1;
        int rightHeight = helper(node.right) + 1;
        int len = leftHeight + rightHeight;
        if (len > maxDiameter) {
            maxDiameter = len;
        }

        return leftHeight > rightHeight ? leftHeight : rightHeight;
    }
}
```
### Note:
The length of path between two nodes is represented by the number of edges between them.