---
title: "Sqrtx"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "binary-search"]
categories: ["algorithm"]
date: 2018-11-08T21:59:03-08:00
lastmod: 2020-03-25T07:59:03-08:00
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
    def mySqrt(self, x: int) -> int:
        left, right = 1, x
        while left <= right:
            mid = left + (right-left)//2
            if mid > x/mid:
                right = mid - 1
            else:
                left = mid + 1
        # left == right or left > right
        # since we need to floor the result, we return right
        return right
```