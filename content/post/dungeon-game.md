---
title: "Dungeon Game"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode"]
categories: ["algorithm"]
date: 2019-09-03T22:27:37-07:00
draft: false
archive: false
---
The demons had captured the princess (`P`) and imprisoned her in the bottom-right corner of a dungeon. The dungeon consists of M x N rooms laid out in a 2D grid. Our valiant knight (`K`) was initially positioned in the top-left room and must fight his way through the dungeon to rescue the princess.   

The knight has an initial health point represented by a positive integer. If at any point his health point drops to 0 or below, he dies immediately.   

Some of the rooms are guarded by demons, so the knight loses health (negative integers) upon entering these rooms; other rooms are either empty (0's) or contain magic orbs that increase the knight's health (positive integers).   

In order to reach the princess as quickly as possible, the knight decides to move only rightward or downward in each step.   

**Write a function to determine the knight's minimum initial health so that he is able to rescue the princess.**  

For example, given the dungeon below, the initial health of the knight must be at least `7` if he follows the optimal path `RIGHT-> RIGHT -> DOWN -> DOWN`.   

![dungeon-game-example](/img/post/dungeon-game-example.png)

#### Note
1. The knight's health has no upper bound.
2. Any room can contain threats or power-ups, even the first room the knight enters and the bottom-right room where the princess is imprisoned.

### Solution
```python
# top-down solution
import sys
INT_MAX = sys.maxsize

class Solution:
    def calculateMinimumHP(self, dungeon: List[List[int]]) -> int:
        m = len(dungeon)
        n = len(dungeon[0])

        if m == 0 or n == 0:
            return 0

        minVal = dungeon[0][0]
        maxes = [[INT_MAX for _ in range(n+1)] for _ in range(m+1)]
        maxes[m][n-1] = maxes[m-1][n] = 1

        for i in range(m-1, -1, -1):
            for j in range(n-1, -1, -1):
                # choose right or down, whichever is lower
                maxes[i][j] = min(maxes[i+1][j], maxes[i][j+1]) - dungeon[i][j]
                # if maxes[i][j] < 1, we only need 1
                maxes[i][j] = max(1, maxes[i][j])

        return maxes[0][0]
```
Final state:
![dungeon-game-example-final](/img/post/dungeon-game-example-final.png)