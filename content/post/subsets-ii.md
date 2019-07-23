---
title: "Subsets Ii"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "python", "dfs", "backtracking"]
categories: ["algorithm"]
date: 2018-10-08T13:04:14-07:00
draft: false
archive: false
---
Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).

**Note:** The solution set must not contain duplicate subsets.

Example:
```
Input: [1,2,2]
Output:
[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]
```
**Solution:**
```python
# Time: o(2^n)
# Space: o(n)
class Solution(object):
    def subsetsWithDup(self, nums):
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
        print("index: ", index, "    given_arr: ", given_arr)
        for i in range(index, len(nums)):
            print("i: ", i)
            print("-------------------")
            # Only use the last one of duplicates, for example, 4,4,4,_4_,5
            if i > index and nums[i] == nums[i - 1]: continue
            # Choose to add nums[i] to the dfs function
            given_arr.append(nums[i])
            self.backtrack(res, given_arr, nums, i+1)
            # Choose NOT to add nums[i] to the dfs function
            given_arr.pop()
```