---
title: "Longest Common Prefix"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "python"]
categories: ["algorithm"]
date: 2019-01-23T09:56:57-08:00
draft: false
archive: false
---
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

**Example 1:**
```
Input: ["flower","flow","flight"]
Output: "fl"
```
**Example 2:**
```
Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
```
**Note:**
All given inputs are in lowercase letters a-z.
**Note:**
```python
# Time: O(n*l), l: number of strings
class Solution(object):
    def longestCommonPrefix(self, strs):
        """
        :type strs: List[str]
        :rtype: str
        """
        if not strs or len(strs) == 0:
            return ""

        res = strs[0]
        for s in strs:
            # string.index returns ValueError if a substring is not found
            while s.find(res) != 0:
                res = res[0: len(res)-1]

        return res
```