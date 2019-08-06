---
title: "Number of Islands"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "dfs"]
categories: ["algorithm"]
date: 2018-10-09T23:52:32-07:00
draft: false
archive: false
---
Given a 2d grid map of `'1'`s (land) and `'0'`s (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

### Example 1
```
Input:
11110
11010
11000
00000

Output: 1
```
### Example 2
```
Input:
11000
11000
00100
00011

Output: 3
```
### Solution
```python
class Solution:
    def numIslands(self, grid):
        """
        :type grid: List[List[str]]
        :rtype: int
        """
        # Edge cases
        if not grid or len(grid) == 0 or len(grid[0]) == 0:
            return 0

        rows = len(grid)
        cols = len(grid[0])
        count = 0

        for i in range(rows):
            for j in range(cols):
                if grid[i][j] == "1":
                    count += 1
                    self.markNeighbours(grid, rows, cols, i, j)
        return count

    def markNeighbours(self, grid, rows, cols, x, y):
        # When exceeds beyond boundaries or current point was visited, return
        if x < 0 or x >= rows or y < 0 or y >= cols or grid[x][y] == "0" or grid[x][y] == "2":
            return
        # Mark this point as visited
        grid[x][y] = "2"
        directions = [ [-1, 0], [1, 0], [0, -1], [0, 1] ]
        for dir in directions:
            adjacentX = x + dir[0]
            adjacentY = y + dir[1]
            self.markNeighbours(grid, rows, cols, adjacentX, adjacentY)
```