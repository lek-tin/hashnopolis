---
title: "Paint House II"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "dynamic-programming"]
categories: ["algorithm"]
date: 2020-03-04T23:30:09-08:00
lastmod: 2020-03-04T23:30:09-08:00
draft: false
archive: false
---
There are a row of n houses, each house can be painted with one of the `k` colors. The cost of painting each house with a certain color is different. You have to paint all the houses such that no two adjacent houses have the same color.  

The cost of painting each house with a certain color is represented by a n x k cost matrix. For example, `costs[0][0]` is the cost of painting house 0 with color 0; `costs[1][2]` is the cost of painting house 1 with color 2, and so on... Find the minimum cost to paint all houses.  

##### Note

All costs are positive integers.

### Example

```
Input: [[1,5,3],[2,9,4]]
Output: 5
Explanation: Paint house 0 into color 0, paint house 1 into color 2. Minimum cost: 1 + 4 = 5; 
             Or paint house 0 into color 2, paint house 1 into color 0. Minimum cost: 3 + 2 = 5. 
```

### Solution (in-place top-down dp)

`n`: number of houses, `k`: number of colors  
Time: `O(n * k^2)`  
Space: `O(1)`  
```python
import math

class Solution:
    def minCostII(self, costs: List[List[int]]) -> int:
        N = len(costs)

        if not costs or N==0:
            return 0

        K = len(costs[0])

        for i in range(N-1, 0, -1):
            for color in range(K):
                minCost = math.inf
                mins = [math.inf] * K
                for j in range(K):
                    if j == color:
                        continue
                    minCost = min(minCost, costs[i][j])
                costs[i-1][color] += minCost

        minCost = math.inf
        for c in costs[0]:
            minCost = min(minCost, c)

        return minCost
```

### Solution (in-place down-up dp - optimized time)

`n`: number of houses, `k`: number of colors  
Time: `O(n * k)`  
Space: `O(1)`  
```python
import math

class Solution:
    def minCostII(self, costs: List[List[int]]) -> int:
        N = len(costs)

        if not costs or N==0:
            return 0

        K = len(costs[0])

        for i in range(1, N):
            # min variables for the prev house
            minColor, secondMinColor = None, None
            for color in range(K):
                cost = costs[i-1][color]
                if minColor==None or cost<costs[i-1][minColor]:
                    secondMinColor = minColor
                    minColor = color
                elif secondMinColor==None or cost<costs[i-1][secondMinColor]:
                    secondMinColor=color

            for color in range(K):
                if color==minColor:
                    costs[i][color] += costs[i-1][secondMinColor]
                else:
                    costs[i][color] += costs[i-1][minColor]

        # The min of the last house is the global min
        return min(costs[-1])
```

#### Follow up

Could you solve it in `O(nk)` runtime?