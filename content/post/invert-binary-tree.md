---
title: "Invert Binary Tree"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "binary-tree", "recursion", "bfs"]
categories: ["algorithm"]
date: 2018-10-26T23:12:09-07:00
lastmod: 2020-06-01T16:12:09-07:00
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

### Solution (recursion)

C++
```c++
class Solution {
public:
    TreeNode* invertTree(TreeNode* root) {
        if(!root) return root;
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
class Solution1 {
    public TreeNode invertTree(TreeNode root) {
        if (root == null) return null;

        if (root != null) {
            invertTree(root.left);
            invertTree(root.right);
        }

        TreeNode tempLeft = root.right, tempRight = root.left;
        root.left = tempLeft;
        root.right = tempRight;

        return root;
    }
}

class Solution2 {
    public TreeNode invertTree(TreeNode root) {
        if (root == null) return root;
        TreeNode tmp = root.left;
        root.left = root.right;
        root.right = tmp;
        invertBinaryTreeRecursive(root.left);
        invertBinaryTreeRecursive(root.right);
        return root;
    }
}
```

Python
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution1:
    def invertTree(self, root: TreeNode) -> TreeNode:
        if not root:
            return None

        newLeft  = self.invertTree(root.left)
        newRight = self.invertTree(root.right)

        root.left, root.right = newRight, newLeft

        return root

class Solution2:
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

### Solution (bfs iterative)

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
    public TreeNode invertTree(TreeNode root) {
        if (root == null) return null;

        Queue<TreeNode> q = new LinkedList<TreeNode>();
        q.add(root);

        while (!q.isEmpty()) {
            TreeNode node = q.poll();
            TreeNode tmp = node.left;
            node.left = node.right;
            node.right = tmp;

            if (node.left != null) q.add(node.left);
            if (node.right != null) q.add(node.right);
        }

        return root;
    }
}
```
