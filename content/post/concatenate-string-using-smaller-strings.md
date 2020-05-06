---
title: "Concatenate String Using Smaller Strings"
description: "Given a big string and a list of small strings, find whether the big string can be represented only by concatenation of smaller strings."
authors: ["lek-tin"]
tags: ["leetcode", "dynamic-programming"]
categories: ["algorithm"]
date: 2019-12-09T21:41:31-08:00
lastmod: 2019-12-09T21:41:31-08:00
draft: false
archive: false
---

Given a big string and a list of small strings, find whether the big string can be represented only by concatenation of smaller strings.

### Example:
```
target = "abccbacbb"
smallerStrings = ["abc", "cc", "ab", "bac", "b"]
Output: True
```

### Solution
Dynamic programming
```python
target = "abccbacbb"
smallerStrings = ["abc", "cc", "ab", "bac", "b"]

N = len(target)
dp = [False for _ in range(N)]

def check(i, target):
  for s in smallerStrings:
    l = len(s)
    # print(s)
    if i + l <= N:
      tryStr = target[i:i+l]
      # print(tryStr)
      if tryStr == s:
        dp[i+l-1] = True
        check(i+l, target)
    # print("-------")

check(0, target)

print(dp)
print(dp[N-1])
```