---
title: "The Maze II"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "bfs"]
categories: ["algorithm"]
date: 2019-03-18T20:34:03-07:00
date: 2019-10-01T23:34:03-07:00
draft: false
archive: false
---
There is a **ball** in a maze with empty spaces and walls. The ball can go through empty spaces by rolling **up**, **down**, **left** or **right**, but it won't stop rolling until hitting a wall. When the ball stops, it could choose the next direction.  

Given the ball's **start position**, the **destination** and the **maze**, find the shortest distance for the ball to stop at the destination. The distance is defined by the number of **empty spaces** traveled by the ball from the start position (excluded) to the destination (included). If the ball cannot stop at the destination, return `-1`.  

The maze is represented by a binary 2D array. `1` means the wall and `0` means the empty space. You may assume that the borders of the maze are all walls. The start and destination coordinates are represented by row and column indexes.  

### Example 1:
```
Input 1: a maze represented by a 2D array

0 0 1 0 0
0 0 0 0 0
0 0 0 1 0
1 1 0 1 1
0 0 0 0 0

Input 2: start coordinate (rowStart, colStart) = (0, 4)
Input 3: destination coordinate (rowDest, colDest) = (4, 4)

Output: 12

Explanation: One shortest way is : left -> down -> left -> down -> right -> down -> right.
             The total distance is 1 + 1 + 3 + 1 + 2 + 2 + 2 = 12.
```
### Example 2:
```
Input 1: a maze represented by a 2D array

0 0 1 0 0
0 0 0 0 0
0 0 0 1 0
1 1 0 1 1
0 0 0 0 0

Input 2: start coordinate (rowStart, colStart) = (0, 4)
Input 3: destination coordinate (rowDest, colDest) = (3, 2)

Output: -1

Explanation: There is no way for the ball to stop at the destination.
```

### Note:
1. There is only one ball and one destination in the maze.
2. Both the ball and the destination exist on an empty space, and they will not be at the same position initially.
3. The given maze does not contain border (like the red rectangle in the example pictures), but you could assume the border of the maze are all walls.
4. The maze contains at least 2 empty spaces, and both the width and height of the maze won't exceed 100.

### Solution
```python
from collections import deque
from math import inf

class Point:
    def __init__(self, x, y, distance):
        self.x = x
        self.y = y
        self.distance = distance

class Solution:
    def shortestDistance(self, maze: List[List[int]], start: List[int], destination: List[int]) -> int:
        m = len(maze)
        n = len(maze[0])

        if not maze or m == 0 or n == 0:
            return -1
        counts = [ [inf for _ in range(n)] for _ in range(m) ]
        q = deque([Point(start[0], start[1], 0)])

        directions = set([ (0,1), (0,-1), (1,0), (-1,0) ])
        while len(q) > 0:
            curr = q.popleft()
            if curr.distance >= counts[curr.x][curr.y]:
                continue
            counts[curr.x][curr.y] = curr.distance

            for dir in directions:
                x = curr.x
                y = curr.y
                distance = curr.distance
                while 0 <= x < m and 0 <= y < n and maze[x][y] == 0:
                    x += dir[0]
                    y += dir[1]
                    distance += 1
                x -= dir[0]
                y -= dir[1]
                distance -= 1

                q.append(Point(x, y, distance))

        shortest = counts[destination[0]][destination[1]]

        return shortest if shortest != inf else -1
```