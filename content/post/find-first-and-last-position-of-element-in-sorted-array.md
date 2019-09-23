---
title: "Find First and Last Position of Element in Sorted Array"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "binary-search"]
categories: ["algorithm"]
date: 2018-10-26T23:10:23-07:00
lastmod: 2019-09-22T22:30:23-07:00
draft: false
archive: false
---

Given an array of integers `nums` sorted in ascending order, find the starting and ending position of a given `target` value.

Your algorithm's runtime complexity must be in the order of `O(log n)`.

If the target is not found in the array, return `[-1, -1]`.

### Example 1
```
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
```
### Example 2
```
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
```
### Solution
`Time: O(logN)`
```python
class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        res = [-1, -1]
        n = len(nums)
        if not nums or n == 0:
            return res

        start, end = 0, n-1
        while start+1 < end:
            mid = start + (end-start)//2
            if nums[mid] >= target:
                end = mid
            else:
                start = mid
        if nums[start] == target:
            res[0] = start
        elif nums[end] == target:
            res[0] = end

        start, end = 0, n-1
        while start+1 < end:
            mid = start + (end-start)//2
            if nums[mid] <= target:
                start = mid
            else:
                end = mid
        if nums[end] == target:
            res[1] = end
        elif nums[start] == target:
            res[1] = start

        return res
```