---
title: "Decode Ways"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "python", "recursion", "dynamic-programming", "memoization"]
categories: ["algorithm"]
date: 2018-10-03T23:49:00-07:00
draft: false
archive: false
---
A message containing letters from A-Z is being encoded to numbers using the following mapping:

'A' -> 1
'B' -> 2
...
'Z' -> 26
Given a non-empty string containing only digits, determine the total number of ways to decode it.

**Example 1:**
```
Input: "12"
Output: 2
Explanation: It could be decoded as "AB" (1 2) or "L" (12).
```
**Example 2:**
```
Input: "226"
Output: 3
Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
```
**Solution:**
```python
class Solution:
    def numDecodings(self, s):
        """
        :type s: str
        :rtype: int
        """
        # "12345" = "1" + decode("2345") or "12" + decode("345")
        # "28345" = "2" + "8" + decode("345")
        # "0xxxx" or "" = 0  // Leading 0
        # "non-zero single digit" = 1, e.g., "7" = 0
        #  Go from left ==> right
        def counter_dp(data, k, memo):
            if k == 0:
                return 1
            # Position of first element
            pos = len(data) - k
            # if leading zero
            if data[pos] == "0":
                return 0
            #  If not running helper for the first time
            if memo[k] != None:
                return memo[k]
            result = counter_dp(data, k-1, memo)
            if k >= 2 and int(data[pos: pos+2]) <= 26:
                result += counter_dp(data, k-2, memo)
            memo[k] = result
            return result

        # initialise memo to Nones
        if s == "":
            return 0
        memo = [None] * (len(s) + 1)
        return counter_dp(s, len(s), memo)
```