---
title: "Two Sum"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "hashmap", "two-pointers"]
categories: ["algorithm"]
date: 2018-08-29T00:44:49+08:00
draft: false
archive: false
---
Given an array of integers, return **indices** of the two numbers such that they add up to a specific target.

You may assume that each input would have **exactly** one solution, and you may not use the same element twice.

### Example
```
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```
### Solution
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
```python
# time: o(nlogn)
# space: o(1)
from functools import cmp_to_key

class Pair:
    def __init__(self, index, val):
        self.index = index
        self.val = val
    def getIndex(self):
        return self.index

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        pairs = []
        for i, num in enumerate(nums):
            pairs.append(Pair(num, i))
        # pairs.sort(key=cmp_to_key(self.ascendSort))
        pairs = sorted(pairs, key=lambda pair: pair.val)

        left, right = 0, len(nums)-1

        for pair in pairs:
            print(pair.index, pair.val)

        while left < right:
            temp = pairs[left].val + pairs[right].val
            if temp == target:
                return [pairs[left].index, pairs[right].index]
            elif temp < target:
                left += 1
            else:
                right -= 1

    def ascendSort(self, x, y):
        return x.val - y.val
```