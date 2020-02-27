---
title: "Sum of Square Numbers"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "math", "binary-search"]
categories: ["algorithm"]
date: 2019-09-20T00:21:44-07:00
lastmod: 2020-02-20T00:21:44-07:00
draft: false
archive: false
---
Given a non-negative integer `c`, your task is to decide whether there're two integers `a` and `b` such that `a2 + b2 = c`.  

### Example 1:
```
Input: 5
Output: True
Explanation: 1 * 1 + 2 * 2 = 5
```
### Example 2:
```
Input: 3
Output: False
```
### Solution
```python
import math

class Solution:
    def judgeSquareSum(self, c: int) -> bool:
        if c <= 1:
            return True

        sqrt = math.ceil(math.sqrt(c))
        left, right = 0, sqrt-1

        while left*left + right*right < c:
            if (left+1)*(left+1) + right*right > c:
                right -= 1
            else:
                left += 1

        if left*left + right*right == c:
            return True
        return False
```
Without `sqrt` function  
Time: `O(c​logc)`  
Space: `O(clogc)`  
```python
class Solution:
    def judgeSquareSum(self, c: int) -> bool:
        a = 0
        while a*a<= c:
            b = c - a*a
            if self.binary_search(0, b, b):
                return True
            a += 1

        return False


    def binary_search(self, start, end, target):
        if start > end:
            return False

        mid = start + (end-start)//2

        if mid*mid == target:
            return True
        elif mid*mid > target:
            return self.binary_search(start, mid-1, target)
        else:
            return self.binary_search(mid+1, end, target)
```
