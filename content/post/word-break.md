---
title: "Word Break"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "dynamic-programming"]
categories: ["algorithm"]
date: 2018-10-10T23:57:15-07:00
draft: false
archive: false
---
Given a **non-empty** string s and a dictionary wordDict containing a list of **non-empty** words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

**Note:**
- The same word in the dictionary may be reused multiple times in the segmentation.
- You may assume the dictionary does not contain duplicate words.
**Example 1:**
```
Input: s = "leetcode", wordDict = ["leet", "code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
```
**Example 2:**
```
Input: s = "applepenapple", wordDict = ["apple", "pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
```
Note that you are allowed to reuse a dictionary word.
**Example 3:**
```
Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
Output: false
```
**Solution:**
```python
class Solution:
    def wordBreak(self, s, wordDict):
        """
        :type s: str
        :type wordDict: List[str]
        :rtype: bool
        """
        if not wordDict:
            return False

        flags = [True] + [False] * (len(s))
        for i in range(1, len(flags)):
            for j in range(i):
                substring = s[j:i]
                # print(substring)
                if flags[j] and substring in wordDict:
                    # i will be the end index of every break word
                    flags[i] = True
                    break
            # print("-------")

        return flags[len(s)]
```
