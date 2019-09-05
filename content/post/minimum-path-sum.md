---
title: "Minimum Path Sum"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "matrix", "dynamic-programming"]
categories: ["algorithm"]
date: 2019-09-02T23:04:31-07:00
draft: false
archive: false
---
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

### Note You can only move either down or right at any point in time.

### Example
```
Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
```
### Explanation Because the path 1→3→1→1→1 minimizes the sum.
### Solution
```python
class Solution:
    def minPathSum(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
        for r in range(len(grid)):
            for c in range(len(grid[0])):
                if (r == 0 and c != 0):
                    grid[r][c] += grid[r][c-1]
                if (r != 0 and c == 0):
                    grid[r][c] += grid[r-1][c]
                if (r != 0 and c != 0):
                    grid[r][c] += min(grid[r-1][c], grid[r][c-1])

        return grid[len(grid) - 1][len(grid[0]) - 1]
```
```python
class Solution:
    def minPathSum(self, grid: List[List[int]]) -> int:
        m = len(grid)
        n = len(grid[0])

        if m == 0 or n == 0:
            return 0

        sums = [[0 for _ in range(n)] for _ in range(m)]
        sums[0][0] = grid[0][0]

        for i in range(1, m):
            sums[i][0] = sums[i-1][0] + grid[i][0]

        for i in range(1, n):
            sums[0][i] = sums[0][i-1] + grid[0][i]

        for i in range(1, m):
            for j in range(1, n):
                sums[i][j] = min(sums[i-1][j], sums[i][j-1]) + grid[i][j]

        return sums[-1][-1]
```