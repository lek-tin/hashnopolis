---
title: "Bitwise and of Numbers Range"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "biw-manipulation"]
categories: ["algorithm"]
date: 2020-03-31T01:24:56-07:00
lastmod: 2020-03-31T01:24:56-07:00
draft: false
archive: false
---
Given a range `[m, n]` where `0 <= m <= n <= 2147483647`, return the bitwise AND of all numbers in this range, inclusive.

### Example 1

```
Input: [5,7]
Output: 4
```

### Example 2

```
Input: [0,1]
Output: 0
```

### Solution

```python
class Solution:
    def rangeBitwiseAnd(self, m: int, n: int) -> int:
        shift = 0

        while m < n:
            m = m >> 1
            n = n >> 1
            shift += 1

        m = m << shift

        return m
```
