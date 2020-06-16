---
title: "Search in a Binary Search Tree"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "bst"]
categories: ["algorithm"]
date: 2020-06-15T22:52:56-07:00
lastmod: 2020-06-15T22:52:56-07:00
draft: false
archive: false
---

Given the root node of a binary search tree (**BST**) and a value. You need to find the node in the BST that the node's value equals the given value. Return the subtree rooted with that node. If such node doesn't exist, you should return NULL.  

For example,  

```
Given the tree:
        4
       / \
      2   7
     / \
    1   3

And the value to search: 2
```

You should return this subtree:  

```
      2     
     / \   
    1   3
```

In the example above, if we want to search the value 5, since there is no node with value 5, we should return `NULL`.

**Note that** an empty tree is represented by NULL, therefore you would see the expected output (serialized tree format) as [], not `null`.

### Solution (recursion)

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
    public TreeNode searchBST(TreeNode root, int val) {
        if (root == null) return null;
        if (root.val == val) return root;

        TreeNode child;
        if (root.val < val) {
            child = searchBST(root.right, val);
            if (child != null) return child;
        } else {
            child = searchBST(root.left, val);
        }

        if (child != null) return child;

        return null;
    }
}
```
