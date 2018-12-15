---
title: "Find All Anagrams in a String"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "python", "hashtable"]
categories: ["algorithm"]
date: 2018-12-15T09:42:45-08:00
draft: false
archive: false
---
Given a string `s` and a **non-empty** string `p`, find all the start indices of `p`'s anagrams in `s`.

Strings consists of lowercase English letters only and the length of both strings `s` and `p` will not be larger than 20,100.

The order of output does not matter.

**Example 1:**
```
Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
```
**Example 2:**
```
Input:
s: "abab" p: "ab"

Output:
[0, 1, 2]

Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
```
**Solution:**
```python
class Solution:
    def findAnagrams(self, s, p):
        """
        :type s: str
        :type p: str
        :rtype: List[int]
        """
        result = []
        primeNums = {
          "a": 2,
          "b": 3,
          "c": 5,
          "d": 7,
          "e": 11,
          "f": 13,
          "g": 17,
          "h": 19,
          "i": 23,
          "j": 29,
          "k": 31,
          "m": 37,
          "l": 41,
          "n": 43,
          "o": 47,
          "p": 53,
          "q": 59,
          "r": 61,
          "s": 67,
          "t": 71,
          "u": 73,
          "v": 79,
          "w": 83,
          "x": 89,
          "y": 97,
          "z": 101
        }
        target = 0
        for p_ in p:
            target += primeNums.get(p_)

        sizeP = len(p)

        for i in range(len(s) - sizeP + 1):
            temp = 0
            for j in range(sizeP):
                temp += primeNums.get(s[i+j])
            if temp == target:
                result.append(i)

        return result
```