---
title: "Group Anagrams"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "anagrams", "dictionary"]
categories: ["algorithm"]
date: 2018-10-22T12:01:59-07:00
lastmod: 2020-04-06T12:01:59-07:00
draft: false
archive: false
---
Given an array of strings, group anagrams together.

### Example
```
Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
    ["ate","eat","tea"],
    ["nat","tan"],
    ["bat"]
]
```

#### Note

- All inputs will be in lowercase.
- The order of your output does not matter.

### Solution (naive)

Time: `O(Nklogk)`, `k`: length of the longest word  
Space: `O(Nk)`  
sort each word and use it the sorted str as a key to the lookup dictionary
```python
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        ans = collections.defaultdict(list)
        for s in strs:
            ans[tuple(sorted(s))].append(s)

        return ans.values()
```

### Solution (better time efficiency)

Time: `O(Nk)`, `k`: length of the longest word  
Space: `O(Nk)`  
```python
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        ans = collections.defaultdict(list)
        for s in strs:
            flags = [0 for _ in range(26)]
            for c in s:
                flags[ord(c) - ord('a')] += 1
            ans[tuple(flags)].append(s)

        return ans.values()
```


### Solution (most time and space efficient)

Time: `O(Nk)`, `k`: length of the longest word  
Space: `O(N)`  
```python
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
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

        def encode(s):
            code = 1
            for c in list(s):
                code *= primeNums[c]
            return code

        ans = {}

        for s in strs:
            key = encode(s)
            if key not in ans:
                ans[key] = []
            ans[key].append(s)

        return ans.values()
```
