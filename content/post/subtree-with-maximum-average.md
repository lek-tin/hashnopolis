---
title: "Subtree With Maximum Average"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "binary-tree", "subtree"]
categories: ["algorithm"]
date: 2019-03-27T19:20:32-07:00
draft: false
archive: false
---
Given a binary tree, find the subtree with maximum average. Return the root of the subtree. It's guaranteed that there is only one subtree with maximum average.  

### Example
Given a binary tree:
```
        1
    /      \
  -5       11
 /  \     /  \
1    2   4   -2

return the node 11.
```

### Solution
```java
public class Solution {
    private class ResultType {
        public int sum, size;
        public ResultType(int sum, int size) {
            this.sum = sum;
            this.size = size;
        }
    }
    
    private TreeNode subtree = null;
    private ResultType subtreeResult = null;
    
    /**
     * @param root the root of binary tree
     * @return the root of the maximum average of subtree
     */
    public TreeNode findSubtree(TreeNode root) {
        helper(root);
        return subtree;
    }
    
    private ResultType helper(TreeNode root) {
        if (root == null) {
            return new ResultType(0, 0);
        }
        // Divide and conquer
        ResultType left = helper(root.left);
        ResultType right = helper(root.right);
        // construct the result using left subtree, current node and right subtree.
        ResultType result = new ResultType(
            left.sum + right.sum + root.val,
            left.size + right.size + 1
        );
        // Compare every substree's median with subtreeResult
        if (subtree == null ||
            (subtreeResult.sum / subtreeResult.size) < (result.sum / result.size)
        ) {
            subtree = root;
            subtreeResult = result;
        }
        // Return current result, rather than subtreeResult, because subtreeResult is global
        // subtreeResult is returned in the main function findSubtree
        return result;
    }
}
```