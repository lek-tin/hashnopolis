---
title: "Sliding Puzzle"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "bfs"]
categories: ["algorithm"]
date: 2020-02-17T23:36:34-08:00
lastmod: 2020-02-17T23:36:34-08:00
draft: false
archive: false
---
On a `2x3` board, there are `5` tiles represented by the integers `1` through `5`, and an empty square represented by `0`.

A move consists of choosing `0` and a **4-directionally** adjacent number and swapping it.  

The state of the board is solved if and only if the board is `[[1,2,3],[4,5,0]]`.  

Given a puzzle board, return the least number of moves required so that the state of the board is solved. If it is impossible for the state of the board to be solved, return `-1`.  

### Example 1
```
Input: board = [[1,2,3],[4,0,5]]
Output: 1
Explanation: Swap the 0 and the 5 in one move.
```

### Example 2
```
Input: board = [[1,2,3],[5,4,0]]
Output: -1
Explanation: No number of moves will make the board solved.
```

### Example 3
```
Input: board = [[4,1,2],[5,0,3]]
Output: 5
Explanation: 5 is the smallest number of moves that solves the board.
An example path:
After move 0: [[4,1,2],[5,0,3]]
After move 1: [[4,1,2],[0,5,3]]
After move 2: [[0,1,2],[4,5,3]]
After move 3: [[1,0,2],[4,5,3]]
After move 4: [[1,2,0],[4,5,3]]
After move 5: [[1,2,3],[4,5,0]]
Input: board = [[3,2,4],[1,5,0]]
Output: 14
```

### Note:
1. board will be a `2 x 3` array as described above.
2. `board[i][j]` will be a permutation of `[0, 1, 2, 3, 4, 5]`.

### Solution
```python
from collections import deque

class Solution:
    def slidingPuzzle(self, board: List[List[int]]) -> int:
        n = len(board)
        m = len(board[0])

        start, goal = "", ""

        for i in range(n):
            for j in range(m):
                curr = board[i][j]
                if curr == 0:
                    start += "XX"
                elif curr < 10:
                    start += "0" + str(curr)
                else:
                    start += str(curr)
                order = (i*m+j+1) % (n*m)
                if order == 0:
                    goal += "XX"
                elif order < 10:
                    goal += "0" + str(order)
                else:
                    goal += str(order)

        if start == goal:
            return 0

        dirs = [ [0,1], [1,0], [0,-1], [-1,0] ]
        q = deque([])
        visited = set()
        steps = 0
        q.append(start)

        while q:
            # increment by 1 for each layer
            steps += 1
            size = len(q)
            # Expand layer by layer: up, down, left or right
            while size > 0:
                size -= 1
                s = q.popleft()
                p = s.index('XX')
                y = (p//2) // m
                x = (p//2) % m
                for i in range(len(dirs)):
                    dx = x + dirs[i][0]
                    dy = y + dirs[i][1]
                    if dx < 0 or dy <0 or dx >= m or dy >= n:
                        continue
                    new_p = (dy*m + dx)*2
                    t_arr = list(s)
                    t_arr[p:p+2], t_arr[new_p:new_p+2] = t_arr[new_p:new_p+2], t_arr[p:p+2]
                    t = "".join(t_arr)
                    if t in visited:
                        continue
                    if t == goal:
                        return steps
                    visited.add(t)
                    q.append(t)

        return -1
# Input: [[4,1,2],[5,0,3]]
# output: 5
# 412503
# --------
# 412530
# 402513
# 412053
# --------
# 410532
# 412503
# 420513
# 042513
# 012453
# --------
# 401532
# 423510
# 542013
# 102453
# --------
# 431502
# 041532
# 423501
# 542103
# 152403
# 120453
```