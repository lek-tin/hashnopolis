---
title: "Subsets"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "dfs", "backtracking"]
categories: ["algorithm"]
date: 2018-09-15T12:48:42-07:00
draft: false
archive: false
---
Given a set of `distinct` integers, nums, return all possible subsets (the power set).

#### Note The solution set must not contain duplicate subsets.

### Example
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
### Solution

Time: `O(n * 2^n)`  
Space: `O(n * 2^n)` keep all the subsets of length `N`, since each of `N` elements could be present or absent.  
```python
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
or
```python
class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        results = []
        subset = []
        # Edge case #1
        if nums == None:
            return results
        # Edge case #2
        if len(nums) == 0:
            results.append([])
            return results
        # Sort nums in ascending order
        nums.sort()
        # start recursion
        self.dfs(0, subset, nums, results)
        return results

    def dfs(self, index, subset, nums, results):
        # Recursion exit condition met
        # add a copy of the current subset
        if (index == len(nums)):
            results.append(subset[:])
            return
        # Entering the next recursion level
        # Select the number at index in nums
        subset.append(nums[index])
        self.dfs(index+1, subset, nums, results)
        # Discard the number at index in nums
        subset.pop()
        self.dfs(index+1, subset, nums, results)
```
Iterations shown in:  
![Subsets level-wise solution enumeration iterations](/img/post/subsets-level-wise-enumeration.jpg)