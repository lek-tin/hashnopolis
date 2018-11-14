---
title: "Longest Consecutive Sequence"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "python"]
categories: ["algorithm"]
date: 2018-11-14T12:01:01-08:00
draft: false
archive: false
---
Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

Your algorithm should run in `O(n)` complexity.

**Example:**
```
Input: [100, 4, 200, 1, 3, 2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
```
**Solution:**
```python
# Time: o(n)
class Solution(object):
    def longestConsecutive(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if nums is None or len(nums) == 0:
            return 0
        map = {}
        maxLen = 0;
        for num in nums:
            if num in map:
                # skip duplicates
                continue
            # initialize ranges
            low, upp = num, num
            if num - 1 in map:
                low = map.get(num - 1)
            if num + 1 in map:
                upp = map.get(num + 1)
            # update length
            maxLen = max(maxLen, upp - low + 1)
            # put possible ranges into map for next iteration
            map[num] = num
            map[low] = upp
            map[upp] = low
        return maxLen
```