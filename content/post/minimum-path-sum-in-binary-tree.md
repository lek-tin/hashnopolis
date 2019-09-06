---
title: "Minimum Path Sum in Binary Tree"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "binary-tree"]
categories: ["algorithm"]
date: 2019-03-27T02:05:08-07:00
draft: false
archive: false
---
Given a Binary Tree, find the minimum sum path from a leaf to root. For example, in the following tree, there are three leaf to root paths `8->-2->10`, `-4->-2->10` and `7->10`. The sums of these three paths are `16`, `4` and `17` respectively. The minimum of them is 17 and the path for minimum is `-4->-2->10`.
```
          10
        /      \
      -2        7
    /   \     
  8     -4    
```

### Solution
```java
public class PathSum {
    public int Solution(TreeNode root) {
        if (root == null) return 0;
        if (root.left == null && root.right == null) return root.val;
        return Math.min(Solution(root.left), Solution(root.right)) + root.val;
    }
}
```