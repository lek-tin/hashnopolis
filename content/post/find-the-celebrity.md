---
title: "Find the Celebrity"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "python"]
categories: ["algorithm"]
date: 2018-11-18T14:19:34-08:00
draft: false
archive: false
---
Suppose you are at a party with `n` people (labeled from `0` to `n - 1`) and among them, there may exist one celebrity. The definition of a celebrity is that all the other `n - 1` people know him/her but he/she does not know any of them.

Now you want to find out who the celebrity is or verify that there is not one. The only thing you are allowed to do is to ask questions like: "Hi, A. Do you know B?" to get information of whether `A` knows `B`. You need to find out the celebrity (or verify there is not one) by asking as few questions as possible (in the asymptotic sense).

You are given a helper function `bool knows(a, b)` which tells you whether A knows `B`. Implement a function int `findCelebrity(n)`, your function should minimize the number of calls to knows.

**Note:** There will be exactly one celebrity if he/she is in the party. Return the celebrity's label if there is a celebrity in the party. If there is no celebrity, return `-1`.
**Solution:**
```python
# Time - O(n)
# Space - O(1)

# The knows API is already defined for you.
# @param a, person a
# @param b, person b
# @return a boolean, whether a knows b
def knows(a, b):
    return

class Solution(object):
    def findCelebrity(self, n):
        """
        :type n: int
        :rtype: int
        """
        # assume person 0 is the celebrity
        celebrity = 0
        for person in range(1, n):
            if knows(celebrity, person):
                celebrity = person

        # test that celebrity doesn't know anyone else
        for i in range(n):
            if i == celebrity:
                continue
            if not knows(i, celebrity) or knows(celebrity, i):
                return -1
        return celebrity
```