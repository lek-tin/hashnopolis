---
title: "Construct Binary Tree From Preorder and Inorder Traversal"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "binary-tree"]
categories: ["algorithm"]
date: 2019-08-24T23:20:01-08:00
draft: false
archive: false
---
Given preorder and inorder traversal of a tree, construct the binary tree.

#### Note
You may assume that duplicates do not exist in the tree.

For example, given:
```
preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
```
Return the following binary tree:
```
    3
   / \
  9  20
    /  \
   15   7
```
### Hint
![construct-binary-tree-from-preorder-and-inorder-traversal](/img/post/construct-binary-tree-from-preorder-and-inorder-traversal.jpg)
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
    public TreeNode buildTree(int[] preorder, int[] inorder) {
        return helper(0, 0, inorder.length - 1, preorder, inorder);
    }

    public TreeNode helper(int preStart, int inStart, int inEnd, int[] preorder, int[] inorder) {
        if (preStart > preorder.length - 1 || inStart > inEnd) {
            return null;
        }
        TreeNode root = new TreeNode(preorder[preStart]);
        // Index of current root in inorder
        int inIndex = 0;
        for (int i = inStart; i <= inEnd; i++) {
            if (inorder[i] == root.val) {
                inIndex = i;
            }
        }
        root.left = helper(preStart + 1, inStart, inIndex - 1, preorder, inorder);
        root.right = helper(preStart + inIndex - inStart + 1, inIndex + 1, inEnd, preorder, inorder);
        return root;
    }
}
```
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> TreeNode:
        if len(preorder) != len(inorder):
            return None

        return self.traverse(preorder, 0, len(preorder)-1, inorder, 0, len(inorder)-1)

    def findPosition(self, nodeArr, start, end, target):
        for i in range(start, end+1):
            if nodeArr[i] == target:
                return i
        return -1

    def traverse(self, preOrder, preStart, preEnd, inOrder, inStart, inEnd):
        if preStart > preEnd:
            return None

        root = TreeNode(preOrder[preStart])

        root_pos_inorder = self.findPosition(inOrder, inStart, inEnd, root.val)

        root.left = self.traverse(preOrder, preStart+1, preStart + (root_pos_inorder - 1 - inStart + 1), inOrder, inStart, root_pos_inorder-1)

        root.right = self.traverse(preOrder, preEnd - (inEnd - root_pos_inorder)+1, preEnd, inOrder, root_pos_inorder+1, inEnd)

        return root
```