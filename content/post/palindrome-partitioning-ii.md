---
title: "Palindrome Partitioning Ii"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "dynamic-programming"]
categories: ["algorithm"]
date: 2020-03-15T03:31:13-07:00
lastmod: 2020-03-15T03:31:13-07:00
draft: false
archive: false
---
Given a string `s`, partition `s` such that every substring of the partition is a palindrome.

Return the minimum cuts needed for a palindrome partitioning of `s`.

### Example

```
Input: "aab"
Output: 1
Explanation: The palindrome partitioning ["aa","b"] could be produced using 1 cut.
```

### Solution (DP)

```python
class Solution:
    def minCut(self, s: str) -> int:
        N = len(s)

        # valid[i][j] = True if s[i~j] IS palindrome, or False if IS NOT palindrome
        valid = [ [True for _ in range(N)] for _ in range(N) ]
        # min cuts of s[0~i]
        dp = [N for _ in range(N)]

        for l in range(2, N+1):
            for i in range(N-l+1):
                j = i+l-1
                valid[i][j] = s[i]==s[j] and valid[i+1][j-1]

        for i in range(N):
            if valid[0][i]:
                # no cuts needed
                dp[i] = 0
                continue
            for j in range(i):
                if valid[j+1][i]:
                    #.          0~i    0~j,j+1~i
                    dp[i] = min(dp[i], dp[j]+1)

        return dp[N-1]
```