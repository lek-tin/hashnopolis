---
title: "Reverse Integer"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "overflow", "modulo"]
categories: ["algorithm"]
date: 2019-01-16T18:44:45-08:00
draft: false
archive: false
---
Given a 32-bit signed integer, reverse digits of an integer.

### Example 1
```
Input: 123
Output: 321
```
### Example 2
```
Input: -123
Output: -321
```
### Example 3
```
Input: 120
Output: 21
```
#### Note
Assume we are dealing with an environment which could only store integers within the `32-bit` signed integer range: `[−231,  231 − 1]`. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
### Solution
```python
class Solution(object):
    def reverse(self, x):
        """
        :type x: int
        :rtype: int
        """
        if x == "" or x == None:
            return x

        res = "" if x > 0 else "-"
        string = str(abs(x))

        for i in range(len(string)-1, -1, -1):
            res += string[i]

        res = int(res)

        if res < -2**31 or res >= 2**31:
            return 0

        return int(res)
```
```python
class Solution:
    def reverse(self, x: int) -> int:
        isNegative = x < 0
        x = abs(x)
        new_x = 0

        while x != 0:
            new_x = new_x * 10 + x % 10
            x //= 10

        # Handles overflow
        if new_x < -2**31 or new_x >= 2**31:
            return 0

        return -new_x if isNegative else new_x
```