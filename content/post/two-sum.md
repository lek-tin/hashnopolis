---
title: "Two Sum"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "hashmap", "sum"]
categories: ["algorithm"]
date: 2018-08-29T00:44:49+08:00
draft: false
archive: false
---
Given an array of integers, return **indices** of the two numbers such that they add up to a specific target.

You may assume that each input would have **exactly** one solution, and you may not use the same element twice.

**Example:**
```
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```
**Solution:**
```python
# time: o(n)
# space: o(n)
class Solution:
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        res = [-1, -1]
        if nums == None or len(nums) < 2:
            return res

        solutionMap = {}
        for pos in range(len(nums) - 1):
            if (target - nums[pos]) in solutionMap:
                res[0] = solutionMap[target - nums[pos]]
                res[1] = pos
                break
            solutionMap[nums[pos]] = pos

        return res
```