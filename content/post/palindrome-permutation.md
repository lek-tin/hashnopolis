---
title: "Palindrome Permutation"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "hashmap", "palindrome"]
categories: ["algorithm"]
date: 2020-03-15T02:19:42-07:00
lastmod: 2020-03-15T02:19:42-07:00
draft: false
archive: false
---

Given a string, determine if a permutation of the string could form a palindrome.

### Example 1
```
Input: "code"
Output: false
```

### Example 2
```
Input: "aab"
Output: true
```

### Example 3
```
Input: "carerac"
Output: true
```

### Solution

```python
class Solution:
    def canPermutePalindrome(self, s: str) -> bool:
        lookup = set()

        for c in s:
            if c not in lookup:
                lookup.add(c)
            else:
                lookup.remove(c)

        return len(lookup) <= 1
```