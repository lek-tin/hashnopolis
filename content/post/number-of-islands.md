---
title: "Number of Islands"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "dfs", "bfs"]
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
DFS
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
BFS
```python
from collections import deque

class Coordinate:
    def __init__(self, x, y):
        self.x = x
        self.y = y

class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        res = 0

        if len(grid) == 0 or len(grid[0]) == 0:
            return res

        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j]:
                    self.search(i, j, grid)
                    res += 1
        return res

    def inBound(self, coor, grid):
        x = coor.x
        y = coor.y
        return x >= 0 and x < len(grid) and y >= 0 and y < len(grid[0])

    def search(self, i, j, grid):
        directions = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0]
        ]
        q = deque()
        q.append(Coordinate(i,j))
        grid[i][j] = False

        while q:
            coor = q.popleft()
            for _, dir in enumerate(directions):
                neighbour = Coordinate(coor.x + dir[0], coor.y + dir[1])
                if not self.inBound(neighbour, grid):
                    continue
                if grid[neighbour.x][neighbour.y]:
                    grid[neighbour.x][neighbour.y] = False
                    q.append(neighbour)
```