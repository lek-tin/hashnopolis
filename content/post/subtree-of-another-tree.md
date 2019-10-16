---
title: "Subtree of Another Tree"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "tree"]
categories: ["algorithm"]
date: 2019-10-15T23:55:51-07:00
lastmod: 2019-10-15T23:55:51-07:00
draft: false
archive: false
---
Given two non-empty binary trees s and t, check whether tree `t` has exactly the same structure and node values with a subtree of `s`. A subtree of `s` is a tree consists of a node in `s` and all of this node's descendants. The tree `s` could also be considered as a subtree of itself.

### Example 1:
Given tree `s`:
```
     3
    / \
   4   5
  / \
 1   2
```
Given tree `t`:
```
   4 
  / \
 1   2
```
Return `true`, because `t` has the same structure and node values with a subtree of `s`.

### Example 2:
Given tree `s`:
```
     3
    / \
   4   5
  / \
 1   2
    /
   0
```
Given tree `t`:
```
   4
  / \
 1   2
```
Return `false`.