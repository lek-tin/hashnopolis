---
title: "Valid Perfect Square"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "binary-search"]
categories: ["algorithm"]
date: 2019-09-19T23:47:10-07:00
lastmod: 2019-09-19T23:47:10-07:00
draft: false
archive: false
---
Given a positive integer num, write a function which returns `True` if num is a perfect square else `False`.

### Note:
Do not use any built-in library function such as sqrt.

### Example 1:
```
Input: 16
Output: true
```
### Example 2:
```
Input: 14
Output: false
```

### Solution
Binary search version 1
```python
class Solution:
    def isPerfectSquare(self, num: int) -> bool:
        if num == 1:
            return True

        left, right = 0, num

        while left <= right:
            mid = left + (right-left)//2
            t = mid*mid
            if t == num:
                return True
            if t < num:
                left = mid + 1
            else:
                right = mid - 1

        return False
```
Binary search version 2
```python
class Solution:
    def isPerfectSquare(self, num: int) -> bool:
        if num == 1:
            return True

        factor = num // 2
        while factor*factor > num:
            factor //= 2

        for i in range(factor, factor*2+1):
            if i*i == num:
                return True

        return False
```