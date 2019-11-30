---
title: "3sum Closest"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "sum"]
categories: ["algorithm"]
date: 2018-08-23T23:30:43+08:00
draft: false
archive: false
---
Given an array `nums` of n integers and an integer `target`, find three integers in `nums` such that the sum is closest to `target`. Return the sum of the three integers. You may assume that each input would have exactly one solution.

Example:
```
Given array nums = [-1, 2, 1, -4], and target = 1.

The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
```
### Solution
```python
# Time: o(n^2)
# Space: o(1)
class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:
        if not nums or len(nums) < 3:
            return -1

        nums.sort()
        bestSum = nums[0] + nums[1] + nums[2]
        for i in range(0, len(nums)-2):
            num = nums[i]
            left = i + 1
            right = len(nums) - 1
            while left < right:
                newSum = num + nums[left] + nums[right]
                if abs(target - newSum) < abs(target - bestSum):
                    bestSum = newSum
                elif newSum < target:
                    left += 1
                else:
                    right -= 1

        return bestSum
```