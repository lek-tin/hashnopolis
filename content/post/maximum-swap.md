---
title: "Maximum Swap"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "array", "greedy"]
categories: ["algorithm"]
date: 2020-02-13T12:22:27-08:00
lastmod: 2020-02-13T12:22:27-08:00
draft: false
archive: false
---
Given a non-negative integer, you could swap two digits at most once to get the maximum valued number. Return the maximum valued number you could get.

### Example 1
```
Input: 2736
Output: 7236
Explanation: Swap the number 2 and the number 7.
```

### Example 2
```
Input: 9973
Output: 9973
Explanation: No swap.
```

#### Note
1. The given number is in the range `[0, 10^8]`

### Solution
```python
class Solution:
    def maximumSwap(self, num: int) -> int:
        numChars = list(str(num))
        n = len(numChars)
        last = [0 for i in range(10)]

        for i in range(n):
            last[ord(numChars[i])-ord("0")] = i

        for i in range(n):
            # test the biggest number first
            j = 9
            # We wanna find out the largest digit on the right
            while j > int(ord(numChars[i])-ord("0")):
                if last[j] > i:
                    temp = numChars[i]
                    numChars[i] = numChars[last[j]]
                    numChars[last[j]] = temp
                    return int("".join(numChars))
                j -= 1

        return num
```
