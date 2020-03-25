---
title: "Ugly Number II"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "heap"]
categories: ["algorithm"]
date: 2019-09-11T22:43:29-07:00
draft: false
archive: false
---
Write a program to find the `n-th` ugly number.  
Ugly numbers are positive numbers whose prime factors only include `2, 3, 5`.  

### Example:
```
Input: n = 10
Output: 12
Explanation: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.
```

#### Note
1. `1` is typically treated as an ugly number.
2. `n` does not exceed `1690`.

### Solution
```python
import heapq

class Solution:
    def nthUglyNumber(self, n: int) -> int:
        if n <= 0:
            return 0
        if n == 1:
            return 1

        q = [1]
        visited = {1: True}
        removed = 0
        ans = 0
        while removed != n:
            ans = heapq.heappop(q)
            removed += 1
            for factor in [2, 3, 5]:
                if ans*factor not in visited:
                    heapq.heappush(q, ans*factor)
                    visited[ans*factor] = True
        return ans
```