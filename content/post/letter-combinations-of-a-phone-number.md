---
title: "17. Letter Combinations of a Phone Number"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "dfs"]
categories: ["algorithm"]
date: 2018-09-03T00:28:45+08:00
draft: false
archive: false
---

Given a string containing digits from `2-9` inclusive, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

![alt text](http://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Telephone-keypad2.svg/200px-Telephone-keypad2.svg.png "Logo Title Text 1")

### Example
```
Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
```
### Note

Although the above answer is in lexicographical order, your answer could be in any order you want.

### Solutions
DFS:
```python
# Time - O(n * 4^n)
# Space - O(n * 4^n), max 4 possible chars per digit so O(4^n) strings each of length n
class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        if len(digits) == 0:
            return []
        if digits == None:
            return []
        lookup = {
            '2': ['a', 'b', 'c'],
            '3': ['d', 'e', 'f'],
            '4': ['g', 'h', 'i'],
            '5': ['j', 'k', 'l'],
            '6': ['m', 'n', 'o'],
            '7': ['p', 'q', 'r', 's'],
            '8': ['t', 'u', 'v'],
            '9': ['w', 'x', 'y' , 'z']
        }
        results = []
        s = ''
        self.match(0, s, digits, lookup, results)
        return results

    def match(self, index, s, digits, lookup, results):
        if (index == len(digits)):
            results.append(s)
            return

        for char in lookup.get(digits[index]):
            # Only pass a copy of s
            self.match(index+1, s+char, digits, lookup, results)
```