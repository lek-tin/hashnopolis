---
title: "Minimum Cost to Hire K Workers"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode"]
categories: ["algorithm"]
date: 2020-03-25T09:57:39-07:00
lastmod: 2020-03-25T09:57:39-07:00
draft: true
archive: false
---

```python
class Solution:
    def mincostToHireWorkers(self, quality: List[int], wage: List[int], K: int) -> float:
        workers = sorted( (w/q, q, w)  for q, w in zip(quality, wage) )

        minCost = float('inf')
        candidates = []
        totalQuality = 0

        for ratio, q, w in workers:
            heapq.heappush(candidates, -q)
            totalQuality += q

            if len(candidates) > K:
                totalQuality += heapq.heappop(candidates)

            if len(candidates) == K:
                minCost = min(minCost, ratio * totalQuality)

        return float(minCost)
```