---
title: "Basic Calculator Ii"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode"]
categories: ["algorithm"]
date: 2020-04-09T06:07:32-07:00
lastmod: 2020-04-09T06:07:32-07:00
draft: false
archive: false
---

Implement a basic calculator to evaluate a simple expression string.

The expression string contains only non-negative integers, `+`, `-`, `*`, `/` operators and empty spaces ` `. The integer division should truncate toward `zero`.  

### Example 1

```
Input: "3+2*2"
Output: 7
```

### Example 2

```
Input: " 3/2 "
Output: 1
```

### Example 3

```
Input: " 3+5 / 2 "
Output: 5
```
#### Note

1. You may assume that the given expression is always valid.
2. **Do not** use the eval `built-in` library function.

### Solution

```python
class Solution:
    def calculate(self, s: str) -> int:
        N = len(s)
        curr = 0
        res, partial = 0, 0
        op = "+"

        while curr < N:
            while s[curr] == " ":
                curr += 1

            num = 0
            while curr < N and s[curr].isdigit():
                num = 10 * num + int(s[curr])
                curr += 1

            if op == "+":
                res += partial
                partial = num
            elif op == "-":
                res += partial
                partial = -num
            elif op == "*":
                partial = partial * num
            elif op == "/":
                isNegative = partial < 0
                partial = abs(partial) // num
                if isNegative:
                    partial = -partial

            while curr < N and s[curr] == " ":
                curr += 1
            if curr < N:
                op = s[curr]
                curr += 1

        return res + partial
# 1+3+2*6/3-2
# res  partial  op
# 0      0      +
# 0      1      +
# 1      3      +
# 4      2      +
# 4      12     +
# 4      4      +
# 8     -2
```
