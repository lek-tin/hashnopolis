---
title: "Ugly Number"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "python"]
categories: ["algorithm"]
date: 2018-09-15T12:52:53-07:00
draft: false
archive: false
---
Write a program to check whether a given number is an ugly number.

Ugly numbers are positive numbers whose prime factors only include `2, 3, 5`.

### Example 1
```
Input: 6
Output: true
Explanation: 6 = 2 × 3
```
### Example 2
```
Input: 8
Output: true
Explanation: 8 = 2 × 2 × 2
```
### Example 3
```
Input: 14
Output: false 
Explanation: 14 is not ugly since it includes another prime factor 7.
```
#### Note  
1. `1` is typically treated as an ugly number.
2. Input is within the 32-bit signed integer range: `[−2**31,  2**31 − 1]`.
### Solution
Recursion
```python
class Solution(object):
    def isUgly(self, num):
        """
        :type num: int
        :rtype: bool
        """
        if num <= 0:
            return False
        if num == 1:
            return True
        elif num % 2 == 0:
            return self.isUgly(num//2)
        elif num%3 == 0:
            return self.isUgly(num//3)
        elif num%5 == 0:
            return self.isUgly(num//5)
        else:
            return False
```
Iterative
```python
class Solution:
    def isUgly(self, num: int) -> bool:
        if num <= 0:
            return False
        if num == 1:
            return True

        while num >= 2 and num%2 == 0:
            num /= 2
        while num >= 3 and num%3 == 0:
            num /= 3
        while num >= 5 and num%5 == 0:
            num /= 5

        return num == 1
```