---
title: "Excel Sheet Column Title"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "python", "modulus"]
categories: ["algorithm"]
date: 2018-11-08T22:42:24-08:00
draft: false
archive: false
---
Given a positive integer, return its corresponding column title as appear in an Excel sheet.

For example:
```
    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB
    ...
```
**Example 1:**
```
Input: 1
Output: "A"
```
**Example 2:**
```
Input: 28
Output: "AB"
```
**Example 3:**
```
Input: 701
Output: "ZY"
```
**Solution:**
```python
class Solution:
    def convertToTitle(self, n):
        """
        :type n: int
        :rtype: str
        """
        digit = 1
        res = ""
        while n > 0:
            # Because we start from A. We minus n by 1 to offer the index.
            n -= 1
            res = chr(ord("A") + n % 26) + res
            n //= 26
        return res
```