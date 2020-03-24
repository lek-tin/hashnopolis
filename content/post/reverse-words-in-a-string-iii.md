---
title: "Reverse Words in a String Iii"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "two-pointers"]
categories: ["algorithm"]
date: 2020-03-12T01:53:02-07:00
lastmod: 2020-03-12T01:53:02-07:00
draft: false
archive: false
---
Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.  

### Example 1

```
Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
```

#### Note

In the string, each word is separated by single space and there will not be any extra space in the string.

### Solution

```python
class Solution:
    def reverseWords(self, s: str) -> str:
        N = len(s)
        start = 0
        s = list(s)
        res = ""
        while start < N:
            while start < N and s[start] == " ":
                start += 1
            stop = start
            while stop < N and s[stop] != " ":
                stop += 1

            left, right = start, stop-1
            while left < right:
                temp = s[right]
                s[right] = s[left]
                s[left] = temp
                left += 1
                right -= 1
            res += "".join(s[start:stop]) + " "
            start = stop

        return res.rstrip()
```