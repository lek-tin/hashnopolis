---
title: "Implement Strstr"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "python", "rabin-karp", "pattern-matching"]
categories: ["algorithm"]
date: 2018-11-03T01:46:24-07:00
draft: false
archive: false
---
Implement [strstr()](http://www.cplusplus.com/reference/cstring/strstr/).

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
Rabin-Karp algorithm
```python
class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        if not needle:
            return 0
        
        if not haystack or len(haystack) < len(needle):
            return -1

        M = len(needle)
        N = len(haystack)
        base = 512   # the number of characters in the input alphabet
        q = 997  # a big prime number
        p = 0    # hash value for needle
        t = 0    # hash value for haystack
        h = 1    # d^(M-1)

        # The value of h would be "pow(d, M-1)%q"
        for i in range(1, M):
            h = (h*base)

        # Calculate the hash value of needle and first window
        # of text
        for i in range(M):
            p = (base*p + ord(needle[i]))%q
            t = (base*t + ord(haystack[i]))%q

        # Slide the needle over text one by one
        for i in range(N-M+1):
            # Check the hash values of current window of text and
            # needle if the hash values match then only check
            # for characters on by one
            if p == t:
                # Check for characters one by one, if any character doesn't match, break the current ith iter
                if haystack[i:i+M] != needle:
                    break
                else:
                    # if p == t and needle[0...M-1] = haystack[i, i+1, ...i+M-1] 
                    return i

            # Calculate hash value for next window of text: Remove
            # leading digit, add trailing digit
            if i < N-M:
                t = ( (t - ord(haystack[i])*h) * base + ord(haystack[i+M]) ) % q

                # We might get negative values of t, converting it to positive
                if t < 0:
                    t = t+q

        return -1
```