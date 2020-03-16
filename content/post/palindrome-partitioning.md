---
title: "Palindrome Partitioning"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "backtracking"]
categories: ["algorithm"]
date: 2019-08-07T00:27:33-07:00
draft: false
archive: false
---
Given a string `s`, partition `s` such that every substring of the partition is a palindrome.

Return all possible palindrome partitioning of `s`.

### Example
```
Input: "aab"
Output:
[
  ["aa","b"],
  ["a","a","b"]
]
```
### Solution
```python
# Time: O(n*2^n)
# Space: `O(n)`. At any time, only one call stack will be in progress
# For example, in put 'ababaaeqwds', one possible call stack will look like 'aba'->'b'->'aa'->'e'->'q'->'w'->'d'->'s': n space
class Solution:
    def partition(self, s: str) -> List[List[str]]:
        if len(s) == 0 or s == None:
            return []

        results = []
        temp = []
        self.search(0, s, temp, results)
        return results

    def search(self, startIndex, s, temp, results):
        if startIndex == len(s):
            results.append(temp[:])
            return

        for i in range(startIndex, len(s)):
            if self.isPalindrome(s, startIndex, i):
                candidateStr = str(s[startIndex:i+1])
                temp.append(candidateStr)
                self.search(i+1, s, temp, results)
                temp.pop()

    def isPalindrome(self, s, start, end):
        while start < end:
            if s[start] != s[end]:
                return False
            start += 1
            end -= 1
        return True
```
