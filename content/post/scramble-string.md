---
title: "Scramble String"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "dfs"]
categories: ["algorithm"]
date: 2020-03-15T04:42:35-07:00
lastmod: 2020-03-15T04:42:35-07:00
draft: false
archive: false
---
Given a string `s1`, we may represent it as a binary tree by partitioning it to two non-empty substrings recursively.  

Below is one possible representation of `s1 = "great"`:  
```
    great
   /    \
  gr    eat
 / \    /  \
g   r  e   at
           / \
          a   t
```

To scramble the string, we may choose any non-leaf node and swap its two children.  

For example, if we choose the node `"gr"` and swap its two children, it produces a scrambled string `"rgeat"`.  
```
    rgeat
   /    \
  rg    eat
 / \    /  \
r   g  e   at
           / \
          a   t
```

We say that "rgeat" is a scrambled string of `"great"`.  

Similarly, if we continue to swap the children of nodes `"eat"` and `"at"`, it produces a scrambled string `"rgtae"`.  

```
    rgtae
   /    \
  rg    tae
 / \    /  \
r   g  ta  e
       / \
      t   a
```

We say that `"rgtae"` is a scrambled string of `"great"`.  

Given two strings `s1` and `s2` of the same length, determine if `s2` is a scrambled string of `s1`.  

### Example 1

```
Input: s1 = "great", s2 = "rgeat"
Output: true
```

### Example 2

```
Input: s1 = "abcde", s2 = "caebd"
Output: false
```

### Solution (DFS with memoization)

```python
from collections import Counter

class Solution:
    def isScramble(self, s1: str, s2: str) -> bool:
        if len(s1) == len(s2) == 0:
            return True

        return self.helper(s1, s2, {})

    def helper(self, s1, s2, cache):
        if( s1 == s2 ):
            return True
        if len(s1) <= 1:
            return False
        key = s1 + " " + s2
        if key in cache:
            return cache[key]

        flag = False
        N = len(s1)
        for i in range(1, N):
            if self.helper(s1[:i], s2[:i], cache) and self.helper(s1[i:], s2[i:], cache):
                flag = True
                break
            if self.helper(s1[:i], s2[-i:], cache) and self.helper(s1[i:], s2[:-i], cache):
                flag = True
                break

        cache[key] = flag
        return flag
```

### Solution

```python
```