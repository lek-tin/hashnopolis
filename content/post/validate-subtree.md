---
title: "Validate Subtree"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "binary-tree"]
categories: ["algorithm"]
date: 2019-03-27T19:12:48-07:00
draft: false
archive: false
---
Given two trees, `T1` and `T2`, write an function to test whether `T2` is a subtree of `T1`.

### Solution
```java
public class Subtree {
    public boolean isSubTree(TreeNode T1, TreeNode T2) {
        if (T2 == null) return true;
        if (T1 == null) return false;
        return (isSameTree(T1,T2) || isSubTree(T1.left, T2) || isSubTree(T1.right, T2));
    }
    public boolean isSameTree(TreeNode T1, TreeNode T2) {
        if (T1 == null && T2 == null)
            return true;
        if (T1 == null || T2 == null)
            return false;
        if (T1.val != T2.val)
            return false;
        return (isSameTree(T1.left, T2.left) && isSameTree(T1.right, T2.right));
    }
}
```