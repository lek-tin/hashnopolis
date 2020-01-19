---
title: "Task Scheduler"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "greedy"]
categories: ["algorithm"]
date: 2018-11-12T19:39:03-08:00
draft: false
archive: false
---
Given a char array representing tasks CPU need to do. It contains capital letters A to Z where different letters represent different tasks.Tasks could be done without original order. Each task could be done in one interval. For each interval, CPU could finish one task or just be idle.

However, there is a non-negative cooling interval n that means between two **same tasks**, there must be at least **n** intervals that CPU are doing different tasks or just be idle.

You need to return the **least** number of intervals the CPU will take to finish all the given tasks.

### Solution
```python
# Time:  O(n)
# Space: O(26) = O(1)
from collections import Counter

class Solution(object):
    def leastInterval(self, tasks, n):
        """
        :type tasks: List[str]
        :type n: int
        :rtype: int
        """
        counter = Counter(tasks)
        _, max_count = counter.most_common(1)[0]

        result = (max_count-1) * (n+1)
        for count in counter.values():
            if count == max_count:
                result += 1
        return max(result, len(tasks))
```