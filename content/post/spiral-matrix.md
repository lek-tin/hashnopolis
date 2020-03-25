---
title: "Spiral Matrix"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "matrix"]
categories: ["algorithm"]
date: 2019-02-17T23:25:31-08:00
draft: false
archive: false
---
Given a matrix of `m x n` elements `(m rows, n columns)`, return all elements of the matrix in spiral order.

### Example 1
```
Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]
```
### Example 2
```
Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
```
### Solution:
```java
class Solution {
    public List<Integer> spiralOrder(int[][] matrix) {

        if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
            return new ArrayList<>();
        }

        List<Integer> res = new ArrayList<>();
        int left = 0;
        int right = matrix[0].length - 1;
        int top = 0;
        int bottom = matrix.length - 1;
        String dir = ">";
        int x = 0; // column
        int y = 0; // row
        while (true) {
            if (left > right || top > bottom) {
                break;
            }

            res.add(matrix[y][x]);

            if (dir == ">") {
                if (x == right) {
                    dir = "v";
                    top++;
                    y++;
                } else {
                    x++;
                }
            } else if (dir == "v") {
                if (y == bottom) {
                    dir = "<";
                    right--;
                    x--;
                } else {
                    y++;
                }
            } else if(dir == "<") {
                if (x == left) {
                    dir = "^";
                    y--;
                    bottom--;
                } else {
                    x--;
                }
            } else if (dir == "^") {
                if (y == top) {
                    dir = ">";
                    left++;
                    x++;
                } else {
                    y--;
                }
            }
        }

        return res;
    }
}
```