---
title: "Implement Strstr"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "python"]
categories: ["algorithm"]
date: 2018-11-03T01:46:24-07:00
draft: false
archive: false
---
Implement ![strstr()](http://www.cplusplus.com/reference/cstring/strstr/).

Return the index of the first occurrence of needle in haystack, or `-1` if needle is not part of haystack.

**Example 1:**
```
Input: haystack = "hello", needle = "ll"
Output: 2
```
**Example 2:**
```
Input: haystack = "aaaaa", needle = "bba"
Output: -1
```
**Clarification:**

What should we return when `needle` is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's ![strstr()](http://www.cplusplus.com/reference/cstring/strstr/) and Java's ![indexOf()](https://docs.oracle.com/javase/7/docs/api/java/lang/String.html#indexOf(java.lang.String)).
**Solution:**
```python
class Solution:
    def strStr(self, haystack, needle):
        """
        :type haystack: str
        :type needle: str
        :rtype: int
        """
        # Edge case: if needle is empty
        if not needle:
            return 0

        for i in range(len(haystack)):
            if haystack[i: i+len(needle)] == needle:
                return  i

        return -1
```