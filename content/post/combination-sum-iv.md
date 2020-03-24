---
title: "Combination Sum Iv"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "dfs", "memoization", "dynamic-programming"]
categories: ["algorithm"]
date: 2020-03-08T20:19:24-07:00
lastmod: 2020-03-08T20:19:24-07:00
draft: false
archive: false
---

Given an integer array with all positive numbers and no duplicates, find the number of possible combinations that add up to a positive integer target.

### Example

```
nums = [1, 2, 3]
target = 4

The possible combination ways are:
(1, 1, 1, 1)
(1, 1, 2)
(1, 2, 1)
(1, 3)
(2, 1, 1)
(2, 2)
(3, 1)

Note that different sequences are counted as different combinations.

Therefore the output is 7.
```

### Follow up
1. What if negative numbers are allowed in the given array?
2. How does it change the problem?
3. What limitation we need to add to the question to allow negative numbers?


### Solution (DFS with memoization)

```python
class Solution:
    def combinationSum4(self, nums: List[int], target: int) -> int:
        nums.sort()
        memo = {}
        result = self.dfs(nums, target, memo)
        return result

    def dfs(self, nums, target, memo):
        if target in memo:
            return memo[target]

        # found a valid sequence
        if target == 0:
            return 1
        # not possible, exit
        if target < 0:
            return 0
        # start counting # of sequences for the current target
        cnt = 0
        for num in nums:
            if num > target:
                continue

            cnt += self.dfs(nums, target - num, memo)

        memo[target] = cnt
        return cnt
```

### Solution (DP)

```python
class Solution:
    def combinationSum4(self, nums: List[int], target: int) -> int:
        if not nums:
            return 0

        dp = [0] * (target + 1)
        dp[0] = 1

        for j in range(1, target + 1):
            for num in nums:
                if num > j:
                    continue
                dp[j] += dp[j - num]

        # nums: [3,1,2,4]
        # target: 4
        # dp: [1, 1, 2, 4, 8]
        return dp[target]
```