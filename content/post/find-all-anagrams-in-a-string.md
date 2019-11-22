---
title: "Find All Anagrams in a String"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "hashtable", "sliding-window"]
categories: ["algorithm"]
date: 2018-12-15T09:42:45-08:00
lastmod: 2019-10-12T09:42:45-08:00
draft: false
archive: false
---
Given a string `s` and a **non-empty** string `p`, find all the start indices of `p`'s anagrams in `s`.

Strings consists of lowercase English letters only and the length of both strings `s` and `p` will not be larger than 20,100.

The order of output does not matter.

### Example 1
```
Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
```
### Example 2
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
### Solution
Python
```python
from collections import Counter

class Solution:
    def findAnagrams(self, s: str, target: str) -> List[int]:
        res = []
        counter_target = Counter(target)
        counter_cur = Counter(s[:len(target)])

        if counter_cur == counter_target:
            res.append(0)

        for id in range(len(target), len(s)):
            startChar = s[id - len(target)]
            endChar = s[id]
            counter_cur[endChar] += 1
            counter_cur[startChar] -= 1
            if counter_cur[startChar] == 0:
                del counter_cur[startChar]  # required for comparison
            if counter_cur == counter_target:
                # id is the ending index, find the starting
                res.append(id - len(target) + 1)

        return res
```