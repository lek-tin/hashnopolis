---
title: "3sum"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "two-pointers"]
categories: ["algorithm"]
date: 2018-08-23T23:29:18+08:00
draft: false
archive: false
---
Given an array `nums` of `n` integers, are there elements `a, b, c` in `nums` such that `a + b + c = 0`? Find all unique triplets in the array which gives the sum of zero.

**Note**:  
The solution set must not contain duplicate triplets.

### Example
```
Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
```
### Solution
```python
# time: o(n^2)
# space: o(1)
class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        results = []

        if not nums:
            return results

        nums.sort()
        # low starts from 0, high starts from listLen - 1, so i needs to iterate between 1~(listLen-3)
        for i in range(0, len(nums)-2):
            num = nums[i]
            # i > 0 to prevent reading nums[0 - 1] when i == 0
            # skip duplicating starting points
            if i > 0 and nums[i] == nums[i-1]:
                continue
            left = i + 1
            right = len(nums) - 1
            while left < right:
                sum = nums[left] + nums[right]
                if sum + num == 0:
                    results.append([nums[left], num, nums[right]])
                    left += 1
                    right -= 1
                    # skip duplicates
                    while left < right and nums[left-1] == nums[left]:
                        left += 1
                    while left < right and nums[right] == nums[right+1]:
                        right -= 1
                elif sum + num < 0:
                    left += 1
                else:
                    right -= 1

        return results
```