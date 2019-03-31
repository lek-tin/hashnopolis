---
title: "Subsets"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "dfs"]
categories: ["algorithm"]
date: 2018-09-15T12:48:42-07:00
draft: false
archive: false
---
Given a set of `distinct` integers, nums, return all possible subsets (the power set).

**Note:** The solution set must not contain duplicate subsets.

**Example:**
```
Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
```
**Solution:**
```python
# Time: o(2^n)
# Space: o(n)
class Solution:
    def subsets(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        res = []
        def dfs(nums, index, path):
            res.append(path)
            for i in range(index, len(nums)):
                dfs(nums, i+1, path+[nums[i]])
        dfs(sorted(nums), 0, [])
        return res
# or
class Solution(object):
    def subsets(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        # Edge case
        if nums == None or len(nums) == 0:
            return []

        # Sort the given numbers
        nums.sort()
        res = []

        # Backtrack
        self.backtrack(res, [], nums, 0)
        return res

    def backtrack(self, res, given_arr, nums, index):
        res.append(list(given_arr))
        for i in range(index, len(nums)):
            # Choose to add nums[i] to the dfs function
            given_arr.append(nums[i])
            self.backtrack(res, given_arr, nums, i+1)
            # Choose NOT to add nums[i] to the dfs function
            given_arr.pop()
```