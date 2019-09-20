---
title: "Guess Number Higher or Lower"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "binary-search"]
categories: ["algorithm"]
date: 2019-09-19T23:19:54-07:00
lastmod: 2019-09-19T23:19:54-07:00
draft: false
archive: false
---
We are playing the Guess Game. The game is as follows:  

I pick a number from `1 to n`. You have to guess which number I picked.  

Every time you guess wrong, I'll tell you whether the number is higher or lower.  

You call a pre-defined API guess(int num) which returns `3` possible results `(-1, 1, or 0)`:  
```
-1 : My number is lower
 1 : My number is higher
 0 : Congrats! You got it!
```
### Example :
```
Input: n = 10, pick = 6
Output: 6
```

### Solution
```python
# The guess API is already defined for you.
# @param num, your guess
# @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
# def guess(num):

class Solution(object):
    def guessNumber(self, n):
        """
        :type n: int
        :rtype: int
        """
        if n <= 1:
            return 1

        l, h = 1, n
        while l <= h:
            mid = l + (h-l)//2
            print(mid)
            if guess(mid) == 1:
                l = mid + 1
            elif guess(mid) == -1:
                h = mid - 1
            else:
                return mid
```