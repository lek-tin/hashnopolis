---
title: "Longest Increasing Path in a Matrix"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "memoization", "dfs"]
categories: ["algorithm"]
date: 2020-04-06T21:13:50-07:00
lastmod: 2020-04-06T21:13:50-07:00
draft: false
archive: false
---
Given an integer matrix, find the length of the longest increasing path.

From each cell, you can either move to four directions: left, right, up or down. You may NOT move diagonally or move outside of the boundary (i.e. wrap-around is not allowed).

### Example 1

```
Input: nums =
[
  [9,9,4],
  [6,6,8],
  [2,1,1]
]
Output: 4
Explanation: The longest increasing path is [1, 2, 6, 9].
```

### Example 2

```
Input: nums =
[
  [3,4,5],
  [3,2,6],
  [2,2,1]
]
Output: 4
Explanation: The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.
```

### Solution

```python
class Solution:
    def longestIncreasingPath(self, matrix: List[List[int]]) -> int:
        if not matrix or not matrix[0]:
            return 0
        self.N, self.M = len(matrix), len(matrix[0])
        cache = [ [0 for j in range(self.M)] for i in range(self.N) ]
        longest = 1

        for i in range(self.N):
            for j in range(self.M):
                res = self.dfs(matrix, i, j, cache)
                if longest < res:
                    longest = res

        return longest

    def dfs(self, matrix, i, j, cache):
        if cache[i][j] != 0:
            return cache[i][j]

        dirs = [ [1,0], [-1,0], [0, 1], [0, -1] ]
        longest = 1
        for dx, dy in dirs:
            next_i, next_j = i+dx, j+dy
            # if matrix[i][j] < matrix[next_i][next_j], then it is not possible that
            # our dfs func previously walked from (next_i, next_j) ->(i, j)
            if 0 <= next_i < self.N and 0 <= next_j < self.M and matrix[i][j] < matrix[next_i][next_j]:
                next_l = 1 + self.dfs(matrix, next_i, next_j, cache)
                if longest < next_l:
                    longest = next_l

        cache[i][j] = longest
        return longest
```
