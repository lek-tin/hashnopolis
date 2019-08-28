---
title: "One Edit Distance"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "string", "two-pointers"]
categories: ["algorithm"]
date: 2019-01-16T15:52:52-08:00
draft: false
archive: false
---
Given two strings s and t, determine if they are both one edit distance apart.

### Note
There are 3 possiblities to satisify one edit distance apart:
1. Insert a character into s to get t
2. Delete a character from s to get t
3. Replace a character of s to get t
### Example 1
```
Input: s = "ab", t = "acb"
Output: true
Explanation: We can insert 'c' into s to get t.
```
### Example 2
```
Input: s = "cab", t = "ad"
Output: false
Explanation: We cannot get t from s by only one step.
```
### Example 3
```
Input: s = "1203", t = "1213"
Output: true
Explanation: We can replace '0' with '1' to get t.
```
### Solution
```python
class Solution(object):
    def isOneEditDistance(self, s1, s2):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        if len(s1) == len(s2):
            return self.one_edit_replace(s1, s2)
        elif len(s1) + 1 == len(s2):
            return self.one_edit_insert(s1, s2)
        elif len(s1) - 1 == len(s2):
            return self.one_edit_insert(s2, s1)
        # Greater than 1 in length
        return False


    def one_edit_replace(self, s1, s2):
        edited = False
        i = 0
        while i < len(s1):
            if s1[i] != s2[i]:
                if edited:
                    return False
                edited = True
            i += 1
        return edited


    def one_edit_insert(self, s1, s2):
        edited = False
        i, j = 0, 0
        while i < len(s1) and j < len(s2):
            if s1[i] != s2[j]:
                if edited:
                    return False
                edited = True
                j += 1
            else:
                i += 1
                j += 1
        # ("ab", "abc") or ("acd", "abcd")
        return True
```