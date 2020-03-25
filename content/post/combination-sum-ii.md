---
title: "Combination Sum II"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "dfs", "backtracking"]
categories: ["algorithm"]
date: 2019-08-06T00:57:28-07:00
lastmod: 2020-03-08T21:42:37+08:00
draft: false
archive: false
---
Given a collection of candidate numbers (`candidates`) and a target number (`target`), find all unique combinations in `candidates` where the candidate numbers sums to `target`.

Each number in `candidates` may only be used **once** in the combination.

#### Note

All numbers (including `target`) will be positive integers.
The solution set must not contain duplicate combinations.
### Example 1
```
Input: candidates = [10,1,2,7,6,1,5], target = 8,
A solution set is:
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]
```
###Example 2:
```
Input: candidates = [2,5,2,1,2], target = 5,
A solution set is:
[
  [1,2,2],
  [5]
]
```
### Solution
This problem is equivalent to [Subsets II](https://leetcode.com/problems/subsets-ii/) because unique combinations means all subsets with no duplicate combinators.
```python
class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        # Equivalent to subsets
        results = []
        combination = []
        # Edge cases
        if candidates == None:
            return results
        if len(candidates) == 0:
            results.append([])
            return results
        # Sort candidates in ascending order
        candidates.sort()
        # Start DFS
        self.dfs(0, combination, target, results, candidates)
        return results

    def dfs(self, startIndex, combination, target, results, candidates):
        # Recursion exit condition met
        # Combination with a sum equal to target is found
        if target == 0:
            results.append(combination[:])
            return
        # If startIndex is out of bound, this loop will do nothing.
        for i in range(startIndex, len(candidates)):
            # Avoid duplicate combinator
            # For example, candidates = [1,1,1,2,...]
            # We would only choose [1,1,1], [_,1,1], [_,_,1]
            if i != 0 and i > startIndex and candidates[i] == candidates[i-1]:
                continue
            # Since candidates is in ascending order, if the current number at i is already bigger than target, there is no need to continue. Abort the searching.
            if target < candidates[i]:
                break
            ## Choose current number at i
            combination.append(candidates[i])
            ## Deduct current number at i from target and go one level deeper
            ## Each number in `candidates` may only be used ONCE in the combination, hence i+1
            self.dfs(i+1, combination, target - candidates[i], results, candidates)
            ## Choose current number at i
            combination.pop()
```
