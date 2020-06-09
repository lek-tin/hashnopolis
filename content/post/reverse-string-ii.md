---
title: "Reverse String II"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "two-pointers"]
categories: ["algorithm"]
date: 2020-03-12T01:39:31-07:00
lastmod: 2020-06-08T01:39:31-07:00
draft: false
archive: false
---

Given a string and an integer `k`, you need to reverse the first `k` characters for every `2k` characters counting from the start of the string. If there are less than `k` characters left, reverse all of them. If there are less than `2k` but greater than or equal to k characters, then reverse the first `k` characters and left the other as original.  

### Example

```
Input: s = "abcdefg", k = 2
Output: "bacdfeg"
Restrictions:
The string consists of lower English letters only.
Length of the given string and k will in the range [1, 10000]
```

### Solution (two pointers)

Java
```java
```

Python
```python
class Solution:
    def reverseStr(self, s: str, k: int) -> str:
        start = 0
        N = len(s)
        s = list(s)

        while start < N:
            left, right = start, min(start+k-1, N-1)
            start += 2*k
            while left < right:
                temp = s[right]
                s[right] = s[left]
                s[left] = temp
                left += 1
                right -= 1

        return "".join(s)
```
