---
title: "Search a 2D Matrix"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "python", "matrix", "search"]
categories: ["algorithm"]
date: 2018-10-30T23:56:03-07:00
draft: true
archive: false
---
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:
- Integers in each row are sorted from left to right.
- The first integer of each row is greater than the last integer of the previous row.
**Example 1:**
```
Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 3
Output: true
```
**Example 2:**
```
Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 13
Output: false
```