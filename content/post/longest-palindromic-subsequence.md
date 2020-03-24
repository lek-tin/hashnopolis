---
title: "Longest Palindromic Subsequence"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "palindrome", "dynamic-programming"]
categories: ["algorithm"]
date: 2020-03-09T19:07:00-07:00
lastmod: 2020-03-09T19:07:00-07:00
draft: true
archive: false
---
Given a string `s`, find the longest palindromic subsequence's length in `s`. You may assume that the maximum length of `s` is `1000`.

Example 1:
Input:

"bbbab"
Output:
4
One possible longest palindromic subsequence is "bbbb".
### Example 2

Input:
```
"cbbd"
```

Output:
```
2
```

One possible longest palindromic subsequence is `"bb"`.

### Solution

```python
class Solution:
    def longestPalindromeSubseq(self, s: str) -> int:
        N = len(s)
        dp = [ [False for _ in range(N)] for _ in range(N)]

        for i in range(N):
            dp[i][i] = 1

        for i in range(1,N):
            for j in range(i-1, -1, -1):
                if s[i]==s[j]:
                    if i-j<=2:
                        dp[j][i] = i-j+1
                    else:
                        dp[j][i] = max(dp[j][i], dp[j+1][i-1]+2)
                else:
                    dp[j][i] = max(dp[j][i-1], dp[j+1][i])

        return dp[0][N-1]
```