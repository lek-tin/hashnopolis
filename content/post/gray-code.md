---
title: "Gray Code"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "python", "binary"]
categories: ["algorithm"]
date: 2018-09-25T08:14:01-07:00
draft: false
archive: false
---
The gray code is a binary numeral system where two successive values differ in only one bit.

Given a non-negative integer n representing the total number of bits in the code, print the sequence of gray code. A gray code sequence must begin with 0.

For example, given `n = 2`, return `[0,1,3,2]`. Its gray code sequence is:
```
00 - 0
01 - 1
11 - 3
10 - 2
```
Note:
For a given n, a gray code sequence is not uniquely defined.

For example, `[0,2,3,1]` is also a valid gray code sequence according to the above definition.

For now, the judge is able to judge based on one instance of gray code sequence. Sorry about that.
**Solution:**
```python
class Solution:
    def grayCode(self, n):
        """
        :type n: int
        :rtype: List[int]
        """
        res = []
        for _, num in enumerate(range(2**n)):
            res.append(num ^ (num >> 1))
        return res
```
**Notes:**   
```
G(i) = i ^ (i/2)
i / 2 == 1 >> 1
```