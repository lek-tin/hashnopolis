---
title: "Binary Tree Maximum Path Sum"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "binary-tree", "dfs"]
categories: ["algorithm"]
date: 2018-10-09T23:50:03-07:00
lastmod: 2018-10-09T23:50:03-07:00
draft: false
archive: false
---
Given a **non-empty** binary tree, find the maximum path sum.

For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain **at least one node** and does not need to go through the root.

### Example 1
```
Input: [1,2,3]

       1
      / \
     2   3

Output: 6
```
### Example 2
```
Input: [-10,9,20,null,null,15,7]

   -10
   /  \
  9   20
     /  \
    15   7

Output: 42
```

### Solution

Python
```python
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def maxPathSum(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        if root != None:
            self.maxValue = root.val
        self.maxPathDown(root)
        return self.maxValue

    def maxPathDown(self, node):
        if node == None:
            return 0
        # Avoid negative numbers
        left = max(0, self.maxPathDown(node.left))
        right = max(0, self.maxPathDown(node.right))
        # DFS to calculate self.maxValue, not calculated within the current execution of function. Only resolved after all depths that need reaching are reached to calculate left and right.
        self.maxValue = max(self.maxValue, left + right + node.val)
        return max(left, right) + node.val
```

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
    Integer maxSum = Integer.MIN_VALUE;
    public int maxPathSum(TreeNode root) {
        if (root == null) {
            return 0;
        }
        helper(root);
        return maxSum;
    }

    private int helper(TreeNode root) {
        if (root == null) {
            return 0;
        }
        // avoid negative number
        int left = Math.max(0, helper(root.left));
        int right = Math.max(0, helper(root.right));
        // Possibility 1: if both branches are used
        // This makes sure that even all nodes on the tree are negative,
        // a negative maxSum still exists
        maxSum = Math.max(maxSum, left + right + root.val);
        // Possibility 2: only return the max branch
        return Math.max(left, right) + root.val;
    }
}
```
