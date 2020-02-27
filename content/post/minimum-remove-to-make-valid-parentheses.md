---
title: "Minimum Remove to Make Valid Parentheses"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "stack"]
categories: ["algorithm"]
date: 2020-01-23T00:28:47-08:00
lastmod: 2020-01-23T00:28:47-08:00
draft: false
archive: false
---
Given a string s of `'('` , `')'` and lowercase English characters.   

Your task is to remove the minimum number of parentheses ( `'('` or `')'`, in any positions ) so that the resulting parentheses string is valid and return any valid string.  

Formally, a parentheses string is valid if and only if:
1. It is the empty string, contains only lowercase characters, or
2. It can be written as AB (A concatenated with B), where A and B are valid strings, or
3. It can be written as (A), where A is a valid string.

### Example 1:
```
Input: s = "lee(t(c)o)de)"
Output: "lee(t(c)o)de"
Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.
```
### Example 2:
```
Input: s = "a)b(c)d"
Output: "ab(c)d"
```
### Example 3:
```
Input: s = "))(("
Output: ""
Explanation: An empty string is also valid.
```
### Example 4:
```
Input: s = "(a(b(c)d)"
Output: "a(b(c)d)"
```

### Constraints:
1. `1 <= s.length <= 10^5`
2. `s[i]` is one of  `'('` , `')'` and lowercase English letters.

### Solution
```python
class Solution:
    def minRemoveToMakeValid(self, s: str) -> str:
        stack = []
        indices = []
        for i, char in enumerate(s):
            if char != '(' and char != ')':
                continue
            elif char == '(':
                stack.append(i)
            elif stack:
                stack.pop()
            else:
                indices.append(i)

        indices += stack

        newStr = ""

        for i, char in enumerate(s):
            if i not in indices:
                newStr += char

        return newStr
```