---
title: "Number of Islands"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "dfs", "bfs"]
categories: ["algorithm"]
date: 2018-10-09T23:52:32-07:00
lastmod: 2020-04-17T01:00:32-07:00
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
### Solution (DFS in Java)

DFS
```java
class Solution {
    public int numIslands(char[][] grid) {
        if (grid.length == 0 || grid[0].length == 0) {
            return 0;
        }

        int res = 0;

        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[0].length; j++) {
                if (grid[i][j] == '1') {
                    dfs(grid, i, j);
                    res++;
                }
            }
        }

        return res;
    }

    private void dfs(char[][] grid, int i, int j) {
        int[][] dirs = {
            {0,1},
            {0,-1},
            {1,0},
            {-1, 0}}
        ;

        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] != '1') {
            return;
        }

        grid[i][j] = 'x';

        for (int[] dir: dirs) {
            int dx = dir[0];
            int dy = dir[1];
            dfs(grid, i+dx, j+dy);
        }
    }
}
```

### Solution (DFS in Python)

DFS
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

class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        res = 0

        if len(grid) == 0 or len(grid[0]) == 0:
            return res

        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] == "1":
                    self.search(i, j, grid)
                    res += 1
        return res

    def inBound(self, x, y, grid):
        return x >= 0 and x < len(grid) and y >= 0 and y < len(grid[0])

    def search(self, i, j, grid):
        directions = [ [0, 1], [0, -1], [1, 0], [-1, 0] ]
        q = deque()
        q.append( (i, j) )
        grid[i][j] = "-1"

        while q:
            x, y = q.popleft()
            for dir in directions:
                new_x, new_y = x+dir[0], y+dir[1]
                if not self.inBound(new_x, new_y, grid):
                    continue
                if grid[new_x][new_y] == "1":
                    grid[new_x][new_y] = "-1"
                    q.append( (new_x, new_y) )
```
