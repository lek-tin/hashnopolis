---
title: "Add Strings"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "string", "arithmetic"]
categories: ["algorithm"]
date: 2019-10-16T00:06:12-07:00
lastmod: 2019-10-16T00:06:12-07:00
draft: false
archive: false
---
Given two non-negative integers `num1` and `num2` represented as string, return the sum of `num1` and `num2`.

#### Note

1. The length of both `num1` and `num2` is `< 5100`.
2. Both `num1` and `num2` contains only digits `0-9`.
3. Both `num1` and `num2` does not contain any leading zero.
4. You must not use any built-in BigInteger library or convert the inputs to integer directly.

### Solution
```python
class Solution:
    def addStrings(self, num1: str, num2: str) -> str:
        if len(num1) < len(num2):
            return self.addStrings(num2, num1)

        n, m = len(num1), len(num2)
        if not n:
            return num2
        if not m:
            return num1

        res, carry, zero = "", 0, ord("0")
        for i in range(n):
            a, b =  ord(num1[-i-1])-zero, ord(num2[-i-1])-zero if i <m else 0
            print(a, b)
            sum = carry + a + b
            carry = sum // 10
            res = chr(sum % 10 + zero) + res
        if carry > 0:
            res = chr(carry + zero) + res
        return res
```