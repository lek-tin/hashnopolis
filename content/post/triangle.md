---
title: "Triangle"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "dynamic-programming"]
categories: ["algorithm"]
date: 2019-09-04T23:06:05-07:00
draft: false
archive: false
---
Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

For example, given the following triangle
```
[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).
```

#### Note
1. Bonus point if you are able to do this using only O(n) extra space, where n is the total number of rows in the triangle.

### Solution
top-down:
```python
class Solution:
    def minimumTotal(self, triangle: List[List[int]]) -> int:
        n = len(triangle)

        if n == 0:
            return 0

        sums = [ [0 for _ in range(n)] for _ in range(n)]

        sums[0][0] = triangle[0][0]

        for i in range(1, n):
            sums[i][0] = sums[i-1][0] + triangle[i][0]
            sums[i][i] = sums[i-1][i-1] + triangle[i][i]

        for i in range(1, n):
            for j in range(1, i):
                sums[i][j] = min(sums[i-1][j-1], sums[i-1][j]) + triangle[i][j]

        return min(sums[-1])
```
Bottom-up
```python
class Solution:
    def minimumTotal(self, triangle: List[List[int]]) -> int:
        n = len(triangle)

        if n == 0:
            return 0

        sums = [ [0 for _ in range(n)] for _ in range(n)]

        for i in range(n):
            sums[-1][i] = triangle[-1][i]

        for i in range(n-2, -1, -1):
            for j in range(0, i+1):
                sums[i][j] = min(sums[i+1][j+1], sums[i+1][j]) + triangle[i][j]

        return sums[0][0]
```
DFS with memoization
```python
class Solution:
    def minimumTotal(self, triangle: List[List[int]]) -> int:
        n = len(triangle)
        if n == 0:
            return 0
        sums = [ [None for _ in range(n)] for _ in range(n)]
        return self.search(0, 0, sums, triangle)

    def search(self, i, j, sums, triangle):
        if i >= len(triangle):
            return 0

        if sums[i][j] != None:
            return sums[i][j]

        sums[i][j] = min(self.search(i+1, j, sums, triangle), self.search(i+1, j+1, sums, triangle)) + triangle[i][j]

        return sums[i][j]
```