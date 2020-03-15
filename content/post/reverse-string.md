---
title: "Reverse String"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "two-pointers"]
categories: ["algorithm"]
date: 2020-03-12T01:37:43-07:00
lastmod: 2020-03-12T01:37:43-07:00
draft: false
archive: false
---
Write a function that reverses a string. The input string is given as an array of characters `char[]`.  

Do not allocate extra space for another array, you must do this by modifying the input array in-place with `O(1)` extra memory.  

You may assume all the characters consist of printable `ascii` characters.  

### Example 1

```
Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
```

### Example 2

```
Input: ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
```

### Solution

```python
class Solution:
    def reverseString(self, s: List[str]) -> None:
        """
        Do not return anything, modify s in-place instead.
        """
        left, right = 0, len(s)-1

        while left < right:
            temp = s[right]
            s[right] = s[left]
            s[left] = temp
            left += 1
            right -= 1
```
