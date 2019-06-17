---
title: "Construct Binary Tree From Inorder and Postorder Traversal"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "bianry-tree"]
categories: ["algorithm"]
date: 2019-02-04T23:50:51-08:00
draft: false
archive: false
---
Given inorder and postorder traversal of a tree, construct the binary tree.

### Note:
You may assume that duplicates do not exist in the tree.

For example, given
```
inorder = [9,3,15,20,7]
postorder = [9,15,7,20,3]
```
Return the following binary tree:
```
    3
   / \
  9  20
    /  \
   15   7
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

// the idea is to start from the rightmst part of the postorder because that is always the root; then divide the inorder as per the value of the root call the right child first because after accesing the parent in postorder the right child is encountered first and then the left child
class Solution {
    int postOrderIndex;
    public TreeNode buildTree(int[] inorder, int[] postorder) {
        postOrderIndex = postorder.length - 1;
        return buildTreeUtil(inorder, postorder, 0, inorder.length - 1);
    }

    public TreeNode buildTreeUtil(int[] inorder, int[] postorder, int start, int end) {
        if(start > end) return null;
        TreeNode newNode = new TreeNode(postorder[postOrderIndex--]);
        if(start == end) return newNode;
        int index = searchRootInInorder(inorder, newNode.val, start, end);
        newNode.right = buildTreeUtil(inorder, postorder, index + 1, end);
        newNode.left = buildTreeUtil(inorder, postorder, start, index - 1);
        return newNode;
    }

    int searchRootInInorder(int[] inorder, int target, int start, int end) {
        for(int i = start; i <= end; i++) {
            if(inorder[i] == target) return i;
        }
        return -1;
    }
}
```