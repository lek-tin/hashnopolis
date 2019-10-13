---
title: "Search a 2d Matrix Ii"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "binary-search", "divide-and-conquer"]
categories: ["algorithm"]
date: 2019-04-02T23:59:01-07:00
lastmod: 2019-09-19T23:59:01-07:00
draft: false
archive: false
---
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:  
- Integers in each row are sorted in ascending from left to right.
- Integers in each column are sorted in ascending from top to bottom.
### Example:
```
Consider the following matrix:

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
```
Given `target = 5`, return `true`.  

Given `target = 20`, return `false`.

### Solution
```java
class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
            return false;
        }

        int row = matrix.length - 1;
        int col = 0;

        while (row >= 0 && col < matrix[0].length) {
            if (matrix[row][col] > target) {
                row--;
            } else if (matrix[row][col] < target) {
                col++;
            } else {
                // found it
                return true;
            }
            // continue searching
        }

        return false;
    }
}
```