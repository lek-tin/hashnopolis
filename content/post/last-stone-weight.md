---
title: "Last Stone Weight"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode"]
categories: ["algorithm"]
date: 2020-04-12T00:02:05-07:00
lastmod: 2020-04-12T00:02:05-07:00
draft: false
archive: false
---

We have a collection of stones, each stone has a positive integer weight.  

Each turn, we choose the two heaviest stones and smash them together.  Suppose the stones have weights x and y with `x <= y`.  The result of this smash is:

1. If `x == y`, both stones are totally destroyed;
2. If `x != y`, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
3. At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)

### Example 1

```
Input: [2,7,4,1,8,1]
Output: 1
Explanation: 
We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.
```

#### Note

1. `1 <= stones.length <= 30`
2. `1 <= stones[i] <= 1000`

### Solution

```python
import heapq

class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        max_heap = [ -w for w in stones]
        heapq.heapify(max_heap)

        for i in range(len(stones)-1):
            remained = -heapq.heappop(max_heap) + heapq.heappop(max_heap)
            heapq.heappush(max_heap, -remained)

        return -max_heap[0]
```
