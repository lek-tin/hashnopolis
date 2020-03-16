---
title: "Valid Anagram"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "hashmap"]
categories: ["algorithm"]
date: 2018-09-15T12:53:21-07:00
draft: false
archive: false
---
Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:
```
Input: s = "anagram", t = "nagaram"
Output: true
```
Example 2:
```
Input: s = "rat", t = "car"
Output: false
```
### Note:
You may assume the string contains only lowercase alphabets.

### Follow-up
What if the inputs contain unicode characters? How would you adapt your solution to such case?


### Solution (using prime numbers)

this approach is elegant but noted that if the strings are too long, the total sums maybe too big (overflow)
```python
class Solution:
    def isAnagram(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
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
        val_1 = 0
        val_2 = 0
        list_1 = list(s)
        list_2 = list(t)
        """ Continue only if the two lists are of the same length"""
        if(len(list_1) == len(list_2)):
            for i in range(len(list_1)):
                val_1 += primeNums[list_1[i]]
                val_2 += primeNums[list_2[i]]
            if (val_1 == val_2):
                return True
        return False
```

### Solution (hashtable)

```python
from collections import Counter

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:

        if not s and not t:
            return True
        if len(s) == len(t) == 0:
            return True

        counter_s = Counter(list(s))

        for c in t:
            if c not in counter_s:
                return False
            counter_s[c] -= 1
            if counter_s[c] == 0:
                del counter_s[c]

        return not bool(counter_s)
```