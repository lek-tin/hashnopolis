---
title: "Palindromic Substrings"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "dynamic-programming"]
categories: ["algorithm"]
date: 2020-03-09T16:46:56-07:00
lastmod: 2020-03-09T16:46:56-07:00
draft: false
archive: false
---
Given a string, your task is to count how many palindromic substrings in this string.  

The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.  

### Example 1

```
Input: "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".
```

### Example 2

```
Input: "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
```

#### Note

1. The input string length won't exceed `1000`.


### Solution (Dynamic Programming)

```python
class Solution:
    def countSubstrings(self, s: str) -> int:
        N = len(s)
        dp = [ [False for _ in range(N)] for _ in range(N)]

        for i in range(N):
            dp[i][i] = True

        count = 0
        for i in range(N):
            for j in range(i, -1, -1):
                if s[i]==s[j] and (i-j<=2 or dp[j+1][i-1]):
                    dp[j][i] = True
                    count += 1

        return count
```
