---
title: "Sqrtx"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "binary-search"]
categories: ["algorithm"]
date: 2018-11-08T21:59:03-08:00
draft: false
archive: false
---
Implement int `sqrt(int x)`.

Compute and return the square root of `x`, where x is guaranteed to be a **non-negative** integer.

Since the return type is an _integer_, the decimal digits are truncated and only the integer part of the result is returned.

### Example 1
```
Input: 4
Output: 2
```
### Example 2
```
Input: 8
Output: 2
```
Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.
### Solution
```python
# log(x)
class Solution:
    def mySqrt(self, x):
        """
        :type x: int
        :rtype: int
        """
        l = 1
        r = x
        while l <= r:
            m = l + (r-l)//2
            if m > x/m:
                r = m - 1
            else:
                l = m + 1

        return r
```