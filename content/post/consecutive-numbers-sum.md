---
title: "Consecutive Numbers Sum"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "math"]
categories: ["algorithm"]
date: 2019-10-19T22:09:30-07:00
lastmod: 2019-10-19T22:09:30-07:00
draft: false
archive: false
---
Given a positive integer `N`, how many ways can we write it as a sum of consecutive positive integers?

### Example 1
```
Input: 5
Output: 2
Explanation: 5 = 5 = 2 + 3
```
### Example 2
```
Input: 9
Output: 3
Explanation: 9 = 9 = 4 + 5 = 2 + 3 + 4
```
### Example 3
```
Input: 15
Output: 4
Explanation: 15 = 15 = 8 + 7 = 4 + 5 + 6 = 1 + 2 + 3 + 4 + 5
```
#### Note
1. `1 <= N <= 10 ^ 9`.

### Solution
Python
```python
class Solution(object):
    def consecutiveNumbersSum(self, N):
        # 1 + 2 + 3 + ... + k = k(k+1)/2
        # 2N = k(2x + k + 1)
        ans = 0
        k = 1
        while k*k <= 2*N:
            if 2*N % k == 0:
                y = 2 * N / k - k - 1
                if y % 2 == 0 and y >= 0:
                    ans += 1
            k += 1
        return ans
```