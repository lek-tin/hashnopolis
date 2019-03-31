---
title: "Longest Substring Without Repeating Characters"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "string", "substring", "hashmap"]
categories: ["algorithm"]
date: 2019-01-22T22:24:06-08:00
draft: false
archive: false
---
Given a string, find the length of the **longest substring** without **repeating** characters.

***Example 1:**
```
Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```
***Example 2:**
```
Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```
***Example 3:**
```
Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
```
**Solution:**
```python
class Solution(object):
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        if s == "":
            return 0

        lastSeen = {}
        start = 0
        longest = 0

        for i, c in enumerate(s):

            if c in lastSeen and lastSeen[c] >= start:
                # start counting a new string after the previous occurence of c
                start = lastSeen[c] + 1
            else:
                longest = max(longest, i - start + 1)

            # Update the last occurence of c
            lastSeen[c] = i

        return longest
```