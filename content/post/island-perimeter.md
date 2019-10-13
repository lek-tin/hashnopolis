---
title: "Island Perimeter"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "bfs"]
categories: ["algorithm"]
date: 2019-09-27T16:50:11-07:00
lastmod: 2019-09-27T16:50:11-07:00
draft: false
archive: false
---
You are given a map in form of a two-dimensional integer grid where `1` represents land and `0` represents water.  

Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).  

The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.  

### Example:
```
Input:
[
  [0,1,0,0],
  [1,1,1,0],
  [0,1,0,0],
  [1,1,0,0]
]

Output: 16
```
### Explanation:
The perimeter is the 16 yellow stripes in the image below:
![Island Perimeter Example](/img/post/island-perimeter-example.png)

### Solution
```python
class Solution:
    def islandPerimeter(self, grid: List[List[int]]) -> int:
        if not grid or len(grid) == 0 or len(grid[0]) == 0:
            return 0
        row, col, perimeter = 0, 0, 0
        directions = set([ (1, 0), (-1, 0), (0, 1), (0, -1) ])
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] == 1:
                    for dir in directions:
                        perimeter += self.search(i+dir[0], j+dir[1], grid)
        return perimeter

    def search(self, row, col, grid):
        if row < 0 or row >= len(grid) or col < 0 or col >= len(grid[0]) or grid[row][col] == 0:
            return 1
        elif grid[row][col] == 1:
            return 0
```