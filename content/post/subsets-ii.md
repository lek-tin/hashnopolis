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
class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        results = []
        subset = []
        # Edge case 1
        if nums == None:
            return results
        # Edge case 2
        if len(nums) == 0:
            results.append([])
            return results
        # Sort nums in ascending order
        nums.sort()
        # start recursion
        self.dfs(0, subset, nums, results)
        return results

    def dfs(self, startIndex, subset, nums, results):
        # Recursion exit condition met
        # add a copy of the current subset
        results.append(subset[:])
        # Entering the next recursion level
        for i in range(startIndex, len(nums)):
            # add a new number to the current subset
            # [1] -> [1,2]
            subset.append(nums[i])
            # find all subsets to append to [1,2]
            self.dfs(i+1, subset, nums, results)
            # backtrack by removing 2 from subset: [1,2].
            subset.pop()
```
Iterations shown in:  
![Subsets backtracking solution iterations](/img/post/subsets-backtracking.jpg)
```