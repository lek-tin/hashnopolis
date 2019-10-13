---
title: "Strobogrammatic Number"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "math"]
categories: ["algorithm"]
date: 2019-10-02T17:53:56-07:00
lastmod: 2019-10-02T17:53:56-07:00
draft: false
archive: false
---
A strobogrammatic number is a number that looks the same when rotated `180` degrees (looked at upside down).  

Write a function to determine if a number is strobogrammatic. The number is represented as a string.  

### Example 1:
```
Input:  "69"
Output: true
```
### Example 2:
```
Input:  "88"
Output: true
```
### Example 3:
```
Input:  "962"
Output: false
```

### Solution
```python
class Solution:
    def isStrobogrammatic(self, num: str) -> bool:
        pairs = {
            1: 1,
            6: 9,
            8: 8,
            9: 6,
            0: 0
        }

        mid = len(num)//2+1
        for i in range(mid):
            leftNum = int(num[i])
            rightNum = int(num[-i-1])
            if leftNum not in pairs or pairs[leftNum] != rightNum:
                return False

        return True
```