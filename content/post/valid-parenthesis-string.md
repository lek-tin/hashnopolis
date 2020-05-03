---
title: "Valid Parenthesis String"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "greedy"]
categories: ["algorithm"]
date: 2020-04-16T00:28:17-07:00
lastmod: 2020-04-16T00:28:17-07:00
draft: false
archive: false
---

Given a string containing only three types of characters: `'('`, `')'` and `'*'`, write a function to check whether this string is valid. We define the validity of a string by these rules:

1. Any left parenthesis `'('` must have a corresponding right parenthesis `')'`.
2. Any right parenthesis `')'` must have a corresponding left parenthesis `'('`.
3. Left parenthesis `'('` must go before the corresponding right parenthesis `')'`.
4. `'*'` could be treated as a single right parenthesis ')' or a single left parenthesis `'('` or an empty string.
5. An empty string is also valid.

### Example 1

```
Input: "()"
Output: True
```

### Example 2

```
Input: "(*)"
Output: True
```

### Example 3

```
Input: "(*))"
Output: True
```

#### Note

- The string size will be in the range [1, 100].

### Solution

```python
class Solution:
    def checkValidString(self, s: str) -> bool:
        opens, closes = 0, 0

        for c in s:
            opens += 1 if c == "(" else -1
            closes -= 1 if c == ")" else -1
            if closes < 0: break
            opens = max(opens, 0)

        return opens == 0
```
