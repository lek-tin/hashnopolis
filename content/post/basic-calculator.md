---
title: "Basic Calculator"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode"]
categories: ["algorithm"]
date: 2020-04-09T03:50:38-07:00
lastmod: 2020-04-09T03:50:38-07:00
draft: false
archive: false
---

Implement a basic calculator to evaluate a simple expression string.  

The expression string may contain open `(` and closing parentheses `)`, the plus `+` or minus sign `-`, non-negative integers and empty spaces ` `.  

### Example 1

```
Input: "1 + 1"
Output: 2
```

### Example 2

```
Input: " 2-1 + 2 "
Output: 3
```

### Example 3

```
Input: "(1+(4+5+2)-3)+(6+8)"
Output: 23
```

#### Note

1. You may assume that the given expression is always valid.
2. **Do not** use the eval `built-in` library function.

### Solution

```python
class Solution:
    def calculate(self, s: str) -> int:
        stack = []
        res = 0
        currNum = 0
        sign = 1
        for c in s:
            if c.isdigit():
                currNum = 10 * currNum + int(c)
            elif c == "+":
                res += sign * currNum
                currNum = 0
                sign = 1
            elif c == "-":
                res += sign * currNum
                currNum = 0
                sign = -1
            elif c == "(":
                stack.append(res)
                stack.append(sign)
                sign = 1
                res = 0
            elif c == ")":
                res += sign * currNum
                currNum = 0
                # previous sign
                res *= stack.pop()
                # previous partial result
                res += stack.pop()
        # add last number
        res += sign * currNum

        return res
```
