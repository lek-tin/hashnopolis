---
title: "Backspace String Compare"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "stack", "two-pointers", "generator"]
categories: ["algorithm"]
date: 2020-04-09T01:53:50-07:00
lastmod: 2020-04-09T01:53:50-07:00
draft: false
archive: false
---

### Solution (build string ❌)

Time: O(N)  
Space: O(N)  
```python
class Solution:
    def backspaceCompare(self, S: str, T: str) -> bool:
        res_1 = self.helper(S)
        res_2 = self.helper(T)
        return len(res_1) == len(res_2) and res_1 == res_2

    def helper(self, s):
        stack = []

        for c in s:
            if c != "#":
                stack.append(c)
            else:
                if len(stack) > 0:
                    stack.pop()

        return "".join(stack)
```
s
### Solution (two pointers 👍🏼)

Time: O(N)  
Space: O(1)  
```python
from itertools import zip_longest

class Solution:
    def backspaceCompare(self, S: str, T: str) -> bool:
        return all( a == b for a, b in zip_longest(self.helper(S), self.helper(T)) )

    def helper(self, s):
        skip = 0

        for c in reversed(s):
            if c == "#":
                skip += 1
            elif skip:
                skip -= 1
            else:
                yield c
```
