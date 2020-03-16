---
title: "Combination Sum"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "dfs", "backtracking"]
categories: ["algorithm"]
date: 2018-09-10T21:42:01+08:00
lastmod: 2020-03-08T21:42:37+08:00
draft: false
archive: false
---
Given a **set** of candidate numbers (`candidates`) **(without duplicates)** and a `target` number (target), find all unique combinations in candidates where the `candidate` numbers sums to `target`.

The same repeated number may be chosen from `candidates` unlimited number of times.

### Note

All numbers (including `target`) will be positive integers.
The solution set must not contain duplicate combinations.
### Example 1
```
Input: candidates = [2,3,6,7], target = 7,
A solution set is:
[
  [7],
  [2,2,3]
]
```
### Example 2
```
Input: candidates = [2,3,5], target = 8,
A solution set is:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]
```
### Solution
```python
class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
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
            # Since candidates is in ascending order, if the current number at i is already bigger than target, there is no need to continue. Abort the searching.
            if target < candidates[i]:
                break
            ## Since there are not duplicates in candidates, we don't need to add logic to skip dups
            ## In contrast to https://www.lintcode.com/problem/combination-sum/description
            ## Choose current number at i
            combination.append(candidates[i])
            ## Deduct current number at i from target and go one level deeper
            ## Each number in `candidates` may be used MULTIPLE TIMES in the combination, hence i
            self.dfs(i, combination, target - candidates[i], results, candidates)
            ## Choose current number at i
            combination.pop()
```