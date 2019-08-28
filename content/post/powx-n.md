---
title: "PowX N"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "recursion"]
categories: ["algorithm"]
date: 2018-11-11T12:40:25-08:00
draft: false
archive: false
---
### Example 1
```
Input: 2.00000, 10
Output: 1024.00000
```
### Example 2
```
Input: 2.10000, 3
Output: 9.26100
```
### Example 3
```
Input: 2.00000, -2
Output: 0.25000
```
### Explanation 2-2 = 1/22 = 1/4 = 0.25
### Note
- `-100.0 < x < 100.0`
- `n` is a `32-bit` signed integer, within the range `[−231, 231 − 1]`
### Solution
```python
# Time: o(logN)
# Space: o(n)
class Solution:
    def myPow(self, x, n):
        """
        :type x: float
        :type n: int
        :rtype: float
        """
        if n > 0:
            return self.calculate(x, n)
        else:
            return 1.0 / self.calculate(x, n)

    def calculate(self, x, n):
        n = abs(n)
        if n == 0:
            return 1.0

        temp = self.calculate(x, n//2)
        if n % 2 == 0:
            return temp * temp
        else:
            return temp * temp * x

```