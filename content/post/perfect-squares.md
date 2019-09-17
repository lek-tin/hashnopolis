---
title: "Perfect Squares"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "dynamic-programming"]
categories: ["algorithm"]
date: 2019-09-14T16:03:20-07:00
draft: false
archive: false
---
Given a positive integer n, find the least number of perfect square numbers (for example, `1, 4, 9, 16, ...`) which sum to `n`.

### Example 1:
```
Input: n = 12
Output: 3 
Explanation: 12 = 4 + 4 + 4.
```
### Example 2:
```
Input: n = 13
Output: 2
Explanation: 13 = 4 + 9.
```
### Solution
```python
import sys
MAX_INT = sys.maxsize

class Solution:
    def numSquares(self, n: int) -> int:
        if n == 0:
            return 0

        count = [MAX_INT for _ in range(n+1)]

        for i in range(1, n+1):
            for j in range(1, n+1):
                if j*j > n:
                    break
                if i == j*j:
                    count[i] = 1
                else:
                    # j = 0, i - j*j = i, therefore we skip j=0
                    count[i] = min(count[i], count[i-j*j]+1)

        return count[n]
```