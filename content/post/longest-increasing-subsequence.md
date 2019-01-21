---
title: "Longest Increasing Subsequence"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "python", "recursion", "memoization"]
categories: ["algorithm"]
date: 2018-12-19T10:47:57-08:00
draft: false
archive: false
---
Given an unsorted array of integers, find the length of longest increasing subsequence.

**Example:**
```
Input: [10,9,2,5,3,7,101,18]
Output: 4 
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4. 
```
**Note:**
- There may be more than one LIS combination, it is only necessary for you to return the length.
- Your algorithm should run in `O(n2)` complexity.
Follow up: Could you improve it to `O(n log n)` time complexity?
**Solution:**
```python
# Time: O(n^2)
# Iterative
class Solution:
    def lengthOfLIS(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        size = len(nums)
        if size == 0:
            return 0

        counts = [1] * size

        for i in range(1, len(nums)):
            # memoization
            for j in range(i):
                if nums[j] < nums[i]:
                    counts[i] = max(counts[i], counts[j] + 1)

        maxCount = max(counts)
        return maxCount
```