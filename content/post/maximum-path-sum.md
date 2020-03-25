---
title: "Maximum Path Sum"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "matrix", "dynamic-programming"]
categories: ["algorithm"]
date: 2019-03-16T01:17:11-07:00
draft: false
archive: false
---
Given a `m x n` grid filled with **non-negative** numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

#### Note
You can only move either down or right at any point in time.

### Example:
```
Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.
```

### Solution
```java
class Solution {
    public int minPathSum(int[][] grid) {
        if (grid == null || grid.length == 0 || grid[0].length == 0)
            return 0;

        int rows = grid.length;
        int cols = grid[0].length;

        for (int i = 1; i < cols; i++) {
            grid[0][i] += grid[0][i-1];
        }

        for (int i = 1; i < rows; i++) {
            grid[i][0] += grid[i-1][0];
        }

        for (int i = 1; i < rows; i++) {
            for (int j = 1; j < cols; j++) {
                grid[i][j] += Math.min(grid[i][j-1], grid[i-1][j]);
            }
        }

        return grid[rows-1][cols-1];
    }
}
```