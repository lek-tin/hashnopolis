---
title: "Add Binary"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "python", "stack"]
categories: ["algorithm"]
date: 2018-09-05T23:48:48+08:00
draft: false
archive: false
---
Given two binary strings, return their sum (also a binary string).

The input strings are both non-empty and contains only characters `1` or `0`.

**Example 1:**
```python
Input: a = "11", b = "1"
Output: "100"
```
**Example 2:**
```python
Input: a = "1010", b = "1011"
Output: "10101"
```
**Solution:**
```python
class Solution:
    def addBinary(self, a, b):
        """
        :type a: str
        :type b: str
        :rtype: str
        """
        result = []
        carry = 0
        i = len(a)-1
        j = len(b)-1
        while carry or i >= 0 or j >= 0:
            total = carry
            if i >= 0:
                total += int(a[i])
                i -= 1
            if j >= 0:
                total += int(b[j])
                j -= 1
            result.append(str(total % 2))
            carry = total // 2
        return "".join(result[::-1])
```