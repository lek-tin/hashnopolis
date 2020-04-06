---
title: "Shortest Distance From All Buildings"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "bfs"]
categories: ["algorithm"]
date: 2020-03-31T01:20:13-07:00
lastmod: 2020-03-31T01:20:13-07:00
draft: false
archive: false
---
You want to build a house on an empty land which reaches all buildings in the shortest amount of distance. You can only move up, down, left and right. You are given a **2D** grid of values `0`, `1` or `2`, where:

1. Each `0` marks an empty land which you can pass by freely.
2. Each `1` marks a building which you cannot pass through.
3. Each `2` marks an obstacle which you cannot pass through.

### Example

```
Input: [[1,0,2,0,1],[0,0,0,0,0],[0,0,1,0,0]]

1 - 0 - 2 - 0 - 1
|   |   |   |   |
0 - 0 - 0 - 0 - 0
|   |   |   |   |
0 - 0 - 1 - 0 - 0

Output: 7 

Explanation: Given three buildings at (0,0), (0,4), (2,2), and an obstacle at (0,2),
             the point (1,2) is an ideal empty land to build a house, as the total 
             travel distance of 3+3+1=7 is minimal. So return 7.
```

#### Note
- There will be at least one building. If it is not possible to build such house according to the above rules, return -1.

### Solution (from 0 to 1's )

Time limit exceeded 👎🏼
```python
from collections import deque

class Solution:
    def shortestDistance(self, grid: List[List[int]]) -> int:
        self.grid = grid
        self.buildings = 0

        if not len(grid) or not len(grid[0]):
            return -1

        self.N, self.M = len(grid), len(grid[0])
        self.res = float("inf")

        for i in range(self.N):
            for j in range(self.M):
                if grid[i][j] == 1:
                    self.buildings += 1
        if not self.buildings:
            return -1
        
        for i in range(self.N):
            for j in range(self.M):
                if grid[i][j] == 0:
                    self.search(i, j)

        return self.res if self.res != float("inf") else -1

    def search(self, x, y):
        q = deque([])
        q.append( (x, y) )

        dirs = [ [0,1], [0,-1], [1,0], [-1,0] ]
        totalDistance = 0
        distance = -1
        visited = set()
        visited.add( (x,y) )
        buildingdReached = 0

        while q:
            distance += 1
            for i in range(len(q)):
                currCoor = q.popleft()
                x, y = currCoor
                curr = self.grid[x][y]
                if curr == 1:
                    buildingdReached += 1
                    totalDistance += distance
                    # abort cause this pick gives us something worse
                    if totalDistance > self.res:
                        return
                elif curr == 2:
                    continue
                elif curr == 0:
                    for v, h in dirs:
                        dx, dy = x+v, y+h
                        if 0 <= dx < self.N and 0 <= dy < self.M and (dx, dy) not in visited:
                            q.append( (dx, dy) )
                            visited.add( (dx, dy) )

        if buildingdReached == self.buildings and self.res > totalDistance:
            self.res = totalDistance
```

### Solution (1's to 0's)

```python
class Solution:
    def shortestDistance(self, grid: List[List[int]]) -> int:
        self.grid = grid
        buildings = 0

        if not len(grid) or not len(grid[0]):
            return -1

        self.N, self.M = len(grid), len(grid[0])
        shortestDist = float("inf")
        self.counts = [ [0 for i in range(self.M)] for j in range(self.N) ]
        self.dists = [ [0 for i in range(self.M)] for j in range(self.N) ]

        for i in range(self.N):
            for j in range(self.M):
                if grid[i][j] == 1:
                    buildings += 1

        if not buildings:
            return -1

        for i in range(self.N):
            for j in range(self.M):
                if grid[i][j] == 1:
                    self.search(i, j)

        for i in range(self.N):
            for j in range(self.M):
                if self.dists[i][j] < shortestDist and self.counts[i][j] == buildings:
                    shortestDist = self.dists[i][j]

        return shortestDist if shortestDist != float("inf") else -1

    def search(self, x, y):
        q = deque([])
        q.append( (x, y) )
        distance = 0
        dirs = [ [0,1], [0,-1], [1,0], [-1,0] ]
        visited = [[False for _ in range(self.M)] for _ in range(self.N)]
        visited[x][y] = True

        prev_level = [(x, y)]
        while prev_level:
            distance += 1
            curr_level = []
            for x, y in prev_level:
                for v, h in dirs:
                    dx, dy = x+v, y+h
                    if 0 <= dx < self.N and 0 <= dy < self.M and self.grid[dx][dy] == 0 and not visited[dx][dy]:
                        curr_level.append( (dx, dy) )
                        self.counts[dx][dy] += 1
                        self.dists[dx][dy] += distance
                        visited[dx][dy] = True
            prev_level = curr_level
````
