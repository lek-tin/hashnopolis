---
title: "Construct Binary Search Tree From Preorder Traversal"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "bst"]
categories: ["algorithm"]
date: 2020-04-20T04:25:35-07:00
lastmod: 2020-04-20T04:25:35-07:00
draft: false
archive: false
---

Return the root node of a binary search tree that matches the given preorder traversal.  

(Recall that a binary search tree is a binary tree where for every node, any descendant of `node.left` has a `value < node.val`, and any descendant of `node.right` has a `value > node.val`. Also recall that a preorder traversal displays the value of the node first, then traverses `node.left`, then traverses `node.right`.)  

### Example 1

![construct binary search tree from preorder traversal exmaple 1](/img/post/construct-binary-search-tree-from-preorder-traversal-exmaple-1.png)
```
Input: [8,5,1,7,10,12]
Output: [8,5,10,1,7,null,12]
```

#### Note:

1. `1 <= preorder.length <= 100`
2. The values of preorder are distinct.

### Solution (stack)

Time: `O(n)`  
Space: `O(n)`  
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
    public TreeNode bstFromPreorder(int[] preorder) {
        if (preorder == null || preorder.length == 0) {
            return null;
        }

        TreeNode root = new TreeNode(preorder[0]);
        Stack<TreeNode> stack = new Stack<TreeNode>();
        stack.push(root);

        // each node will be added and popped only ONCE
        for (int i = 1; i < preorder.length; i++) {
            TreeNode node = new TreeNode(preorder[i]);
            if (node.val < stack.peek().val) {
                stack.peek().left = node;
            } else {
                TreeNode pop = new TreeNode();
                // traverse upward to find the root parent
                while (!stack.empty() && stack.peek().val < node.val) {
                    pop = stack.pop();
                }
                pop.right = node;
            }
            stack.push(node);
        }

        return root;
    }
}
```

### Solution (recursion)

![construct binary search tree from preorder traversal recursion tree](/img/post/construct-binary-search-tree-from-preorder-traversal-recursion-tree.png)
Time: `O(n)`  
Space: `O(n)`  
```java
import java.lang.*;

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
    int preIndex = 0;

    public TreeNode bstFromPreorder(int[] preorder) {
        if (preorder == null || preorder.length == 0) {
            return null;
        }

        return dfs(preorder, preorder[0], Integer.MIN_VALUE, Integer.MAX_VALUE, preorder.length);
    }

    private TreeNode dfs(int[] preorder, int rootVal, Integer min, Integer max, int size) {
        // base case
        if (preIndex >= size) {
            return null;
        }

        TreeNode root = null;

        if (preorder[preIndex] > min && preorder[preIndex] < max) {
            root = new TreeNode(rootVal);
            // update preIndex
            preIndex++; 

            if (preIndex < size)  {
                root.left = dfs(preorder, preorder[preIndex], min, rootVal, size);
            }
            if (preIndex < size)  {
                root.right = dfs(preorder, preorder[preIndex], rootVal, max, size);
            }

            return root;
        }

        return root;
    }
}
```
