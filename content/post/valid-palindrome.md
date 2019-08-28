---
title: "Valid Palindrome"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "palindrome"]
categories: ["algorithm"]
date: 2018-11-01T22:39:07-07:00
draft: false
archive: false
---
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

### Example 1
```
Input: "A man, a plan, a canal: Panama"
Output: true
```
### Example 2
```
Input: "race a car"
Output: false
```
### Solution
```python
class Solution:
    def isPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """
        if not s:
            return True

        head = 0
        tail = len(s) - 1

        while head <= tail:
            cHead, cTail = s[head], s[tail]
            if not cHead.isalpha() and not cHead.isdigit():
                head += 1
            elif not cTail.isalpha() and not cTail.isdigit():
                tail -= 1
            elif cHead.upper() != cTail.upper():
                return False
            else:
                head += 1
                tail -= 1
        return True
```
