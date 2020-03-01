---
title: "Minimum Cost to Connect Sticks"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "greedy"]
categories: ["algorithm"]
date: 2020-02-29T20:46:40-08:00
lastmod: 2020-02-29T20:46:40-08:00
draft: false
archive: false
---
Given `n` sticks of different lengths, we need to connect these sticks into one stick. We can connect only 2 sticks at a time. The cost required to connect `2` sticks is equal to sum of their lengths. The length of this connected stick is also equal to the sum of their lengths. This process is repeated until `n` sticks are connected into a single stick. Find the min possible cost required to connect all sticks.  

## Example 1

```
Input: sticks = [8, 4, 6, 12]
Output: 58
Explanation: The optimal way to connect sticks is as follows
1. Connect the sticks of length 4 and 6 (cost is 10). sticks after connecting: [8, 10, 12]
2. Connect the sticks of length 8 and 10 (cost is 18). sticks after connecting: [18, 12]
3. Connect the sticks of length 18 and 12 (cost is 30).
Total cost to connect the sticks is 10 + 18 + 30 = 58
```

### Example 2

```
Input: sticks = [20, 4, 8, 2]
Output: 54
```

### Example 3

```
Input: sticks = [1, 2, 5, 10, 35, 89]
Output: 224
```

### Example 4:
```
Input: sticks = [2, 2, 3, 3]
Output: 20
```

### Solution

```python
from queue import PriorityQueue

class Solution:
    def connectSticks(self, sticks: List[int]) -> int:
        q = PriorityQueue()
        for stick in sticks:
            q.put(stick)

        minCost = 0

        while q.qsize() > 1:
            cost = q.get() + q.get()
            q.put(cost)
            minCost += cost

        return minCost
```