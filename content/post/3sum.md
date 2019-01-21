---
title: "15. 3sum"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "python", "two-pointers", "sum"]
categories: ["algorithm"]
date: 2018-08-27T23:29:18+08:00
draft: false
archive: false
---
Given an array `nums` of `n` integers, are there elements `a, b, c` in `nums` such that `a + b + c = 0`? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

**Example:**
```
Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
```
**Solution:**
```python
# time: o(n^2)
# space: o(1)
class Solution:
  def threeSum(self, nums):
    """
    :type nums: List[int]
    :rtype: List[List[int]]
    """
    nums.sort()

    res  = []
    listLen = len(nums)
    # low starts from 0, high starts from listLen - 1, so i needs to iterate between 1~(listLen-2)
    for i in range(listLen - 1):
      # i > 0 to prevent reading nums[0 - 1] when i == 0
      # skip duplicating starting points
      if i > 0 and nums[i] == nums[i-1]:
        continue

      low = i + 1
      high = listLen - 1
      third = 0 - nums[i]

      while low < high:
        if nums[low] + nums[high] == third:
          res.append([nums[i], nums[low], nums[high]])
          while low < high and nums[low] == nums[low + 1]:
            low += 1
          while low < high and nums[high] == nums[high - 1]:
            high -= 1
          low += 1
          high -= 1
        elif nums[low] + nums[high] < third:
          low += 1
        else:
          high -= 1

    return res
```