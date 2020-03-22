---
title: "Remove Duplicate Letters"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "greedy", "stack"]
categories: ["algorithm"]
date: 2020-03-19T03:16:26-07:00
lastmod: 2020-03-19T03:16:26-07:00
draft: false
archive: false
---
Given a string which contains only lowercase letters, remove duplicate letters so that every letter appears once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.

### Example 1

```
Input: "bcabc"
Output: "abc"
```

### Example 2

```
Input: "cbacdcbc"
Output: "acdb"
```

### Example 3

```
Input: "cba"
Output: "cba"
```

### Solution

```python
class Solution:
    def removeDuplicateLetters(self, s: str) -> str:
        stack = []
        seen = set()

        last_indices = {c: i for i, c in enumerate(s)}

        for i, c in enumerate(s):
            print(c, seen, stack)
            if c not in seen:
                while stack and c < stack[-1] and i < last_indices[stack[-1]]:
                    seen.remove(stack.pop())
                seen.add(c)
                stack.append(c)

        return "".join(stack)
```