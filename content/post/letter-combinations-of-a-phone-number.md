---
title: "17. Letter Combinations of a Phone Number"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "python", "dfs"]
categories: ["algorithm"]
date: 2018-09-03T00:28:45+08:00
draft: false
archive: false
---

Given a string containing digits from `2-9` inclusive, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

![alt text](http://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Telephone-keypad2.svg/200px-Telephone-keypad2.svg.png "Logo Title Text 1")

**Example:**
```
Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
```
**Note:**

Although the above answer is in lexicographical order, your answer could be in any order you want.

**Solutions**:  
dfs approach:
```python
# time: o(n)
class Solution:
    def letterCombinations(self, digits):
        """
        :type digits: str
        :rtype: List[str]
        """
        self.res = []
        if not digits or '0' in digits or '1' in digits:
            return self.res

        self.mapping = {
            '2' : ['a', 'b', 'c'],
            '3' : ['d', 'e', 'f'],
            '4' : ['g', 'h', 'i'],
            '5' : ['j', 'k', 'l'],
            '6' : ['m', 'n', 'o'],
            '7' : ['p', 'q', 'r', 's'],
            '8' : ['t', 'u', 'v'],
            '9' : ['w', 'x', 'y' , 'z']
        }

        self.dfs(digits, 0, [])

        return self.res

    def dfs(self, digits, index, temp):
        if len(temp) == len(digits):
            self.res.append("".join(x for x in temp))
            return
        for char in self.mapping[digits[index]]:
            temp.append(char)
            self.dfs(digits, index+1, temp)
            temp.pop()
```
iterative approach:
```python
# Time - O(n * 4^n)
# Space - O(n * 4^n), max 4 possible chars per
# digit so O(4^n) strings each of length n
class Solution(object):
  def letterCombinations(self, digits):
    """
    :type digits: str
    :rtype: List[str]
    """
    if not digits or '0' in digits or '1' in digits:
        return []

    results = [[]]
    mapping = {'2' : ['a', 'b', 'c'],
      '3' : ['d', 'e', 'f'],
      '4' : ['g', 'h', 'i'],
      '5' : ['j', 'k', 'l'],
      '6' : ['m', 'n', 'o'],
      '7' : ['p', 'q', 'r', 's'],
      '8' : ['t', 'u', 'v'],
      '9' : ['w', 'x', 'y' , 'z']
    }

    for digit in digits:
      temp = []
      for result in results:
        for letter in mapping[digit]:
          temp.append(result + [letter])
      results = temp

    # convert lists of chars to strings
    return ["".join(result) for result in results]
```