---
title: "Invert Binary Tree"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "binary-tree", "recursion"]
categories: ["algorithm"]
date: 2018-10-26T23:12:09-07:00
lastmod: 2020-03-23T16:12:09-07:00
draft: false
archive: false
---
Invert a binary tree.
```
         4
       /   \
      2     7
     / \   / \
    1   3 6   9
```
to
```
         4
       /   \
      7     2
     / \   / \
    9   6 3   1
```

#### Thoughts

What if a node is NULL? A NULL has no children, so how to iterate deeper into the tree?

### Solution
```c++
// Attempt
// class Solution {
// public:

     void swapNodes(*leftNode, *rightNode) {
         *temp = *leftNode;
         *leftNode = *rightNode;
         *rightNode = temp;
         return;
     }

     TreeNode* invertTree(TreeNode* root) {
         if (root == NULL)
             return
         invertTree(root->left)
     }
 };
```

### Solution

C++
```c++
class Solution {
public:
    TreeNode* invertTree(TreeNode* root) {
        if(!root || (!root->left && !root->right)) return root;
        invertTree(root->left);
        invertTree(root->right);
        swap(&root->left, &root->right);
        return root;
    }

    void swap(TreeNode** l, TreeNode** r) {
        TreeNode* t = *l;
        *l = *r;
        *r = t;
    }
};
```

### Solution

Python

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def invertTree(self, root: TreeNode) -> TreeNode:
        if not root:
            return None

        newLeft  = self.invertTree(root.left)
        newRight = self.invertTree(root.right)

        root.left, root.right = newRight, newLeft

        return root
```

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def invertTree(self, root: TreeNode) -> TreeNode:
        if not root:
            return

        if root.left and (root.left.left or root.left.right):
            self.invertTree(root.left)

        if root.right and (root.right.left or root.right.right):
            self.invertTree(root.right)

        tempLeft, tempRight =  root.left, root.right
        root.left, root.right = tempRight, tempLeft

        return root
```