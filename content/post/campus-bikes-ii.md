---
title: "Campus Bikes Ii"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "dynamic-programming", "bitmasking"]
categories: ["algorithm"]
date: 2020-03-24T15:28:17-07:00
lastmod: 2020-03-24T15:28:17-07:00
draft: true
archive: false
---

On a campus represented as a **2D** grid, there are N workers and M bikes, with N <= M. Each worker and bike is a **2D** coordinate on this grid.  

We assign one unique bike to each worker so that the sum of the Manhattan distances between each worker and their assigned bike is **minimized**.  

The **Manhattan distance** between two points `p1` and `p2` is `Manhattan(p1, p2) = |p1.x - p2.x| + |p1.y - p2.y|`.  

Return the minimum possible sum of Manhattan distances between each worker and their assigned bike.  

### Example 1

![Campus bikes II example 1](/img/post/campus-bikes-ii-example-1.png)
```
Input: workers = [[0,0],[2,1]], bikes = [[1,2],[3,3]]
Output: 6
Explanation: 
We assign bike 0 to worker 0, bike 1 to worker 1. The Manhattan distance of both assignments is 3, so the output is 6.
```

### Example 2

![Campus bikes II example 2](/img/post/campus-bikes-ii-example-2.png)
```
Input: workers = [[0,0],[1,1],[2,0]], bikes = [[1,0],[2,2],[2,1]]
Output: 4
Explanation: 
We first assign bike 0 to worker 0, then assign bike 1 to worker 1 or worker 2, bike 2 to worker 2 or worker 1. Both assignments lead to sum of the Manhattan distances as 4.
```

##### Note

1. `0 <= workers[i][0], workers[i][1], bikes[i][0], bikes[i][1] < 1000`
2. All worker and bike locations are distinct.
3. `1 <= workers.length <= bikes.length <= 10`

#### Solution (bit manipulation + dynamic programming)

time: `O(N*M*2^M)`  
space: `O(N*2^M)`  
```python
import math

class Solution:
    def assignBikes(self, workers: List[List[int]], bikes: List[List[int]]) -> int:
        N = len(workers)
        M = len(bikes)
        # padding for workers
        dp = [ [math.inf]*(1<<M) for _ in range(N+1) ]
        dp[0][0] = 0

        for i in range(1, N+1):
            for state in range(1, 1<<M):
                for k in range(M):
                    if state&(1<<k) == (1<<k):
                        # if the k-th bit in state is "1",
                        # it means bikes[k] is assigned to workers[i-1]
                        pre_state = state ^ (1<<k)
                        dp[i][state] = min(
                            dp[i][state],
                            dp[i-1][pre_state]+self.calcDistance(bikes[k], workers[i-1])
                        )

        return min(dp[-1])

    def calcDistance(self, pos1, pos2):
        # Manhattan distance
        return abs(pos1[1]-pos2[1]) + abs(pos1[0]-pos2[0])
```

#### Similar

- Count ways to assign unique cap to every person
