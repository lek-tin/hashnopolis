---
title: "16. 3sum Closest"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "sum"]
categories: ["algorithm"]
date: 2018-08-27T23:30:43+08:00
draft: false
archive: false
---
Given an array `nums` of n integers and an integer `target`, find three integers in `nums` such that the sum is closest to `target`. Return the sum of the three integers. You may assume that each input would have exactly one solution.

Example:
```
Given array nums = [-1, 2, 1, -4], and target = 1.

The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
```
**Solution:**
```python
# Time: o(n^2)
# Space: o(1)
class Solution:
  def threeSumClosest(self, nums, target):
    """
    :type nums: List[int]
    :type target: int
    :rtype: int
    """
    if nums is None or len(nums) < 3:
      return None

    nums.sort()
    closest = nums[0] + nums[1] + nums[-1]

    for i in range(len(nums)-2):
      low = i+1
      high = len(nums)-1

      while low < high:
        tempSum = nums[i] + nums[low] + nums[high]
        # Perfect => exit
        if tempSum == target:
          return target

        if abs(tempSum - target) < abs(closest - target):
          closest = tempSum

        # Continue the iteration
        if tempSum - target > 0:
          high -= 1
        else:
          low += 1

    return closest
```