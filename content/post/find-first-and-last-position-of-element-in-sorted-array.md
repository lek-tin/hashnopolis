---
title: "Find First and Last Position of Element in Sorted Array"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "sorted-array", "binary-search"]
categories: ["algorithm"]
date: 2018-10-26T23:10:23-07:00
draft: false
archive: false
---

Given an array of integers `nums` sorted in ascending order, find the starting and ending position of a given `target` value.

Your algorithm's runtime complexity must be in the order of `O(log n)`.

If the target is not found in the array, return `[-1, -1]`.

**Example 1:**
```
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
```
**Example 2:**
```
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
```
**Solution:**
Time: O(logN)
```python
class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        if not nums or len(nums) == 0:
            return [-1, -1]
        N = len(nums)

        start, end = 0, N-1
        first = -1
        while start+1 < end:
            mid = start + (end-start)//2
            if nums[mid] >= target:
                end = mid
            else:
                start = mid
        if nums[start] == target:
            first = start
        elif nums[end] == target:
            first = end

        start, end = 0, N-1
        second = -1
        while start+1 < end:
            mid = start + (end-start)//2
            if nums[mid] <= target:
                start = mid
            else:
                end = mid
        if nums[end] == target:
            second = end
        elif nums[start] == target:
            second = start

        return [first, second]
```