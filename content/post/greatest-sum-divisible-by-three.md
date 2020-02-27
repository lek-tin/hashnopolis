---
title: "Greatest Sum Divisible by Three"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "dynamic-programming"]
categories: ["algorithm"]
date: 2020-02-15T14:34:52-08:00
lastmod: 2020-02-15T14:34:52-08:00
draft: false
archive: false
---
Given an array `nums` of integers, we need to find the maximum possible sum of elements of the array such that it is divisible by three.

### Example 1:
```
Input: nums = [3,6,5,1,8]
Output: 18
Explanation: Pick numbers 3, 6, 1 and 8 their sum is 18 (maximum sum divisible by 3).
```

### Example 2:
```
Input: nums = [4]
Output: 0
Explanation: Since 4 is not divisible by 3, do not pick any number.
```

### Example 3:
```
Input: nums = [1,2,3,4,4]
Output: 12
Explanation: Pick numbers 1, 3, 4 and 4 their sum is 12 (maximum sum divisible by 3).
```

### Constraints:
1. `1 <= nums.length <= 4 * 10^4`
2. `1 <= nums[i] <= 10^4`

### Solution
```python
import math

class Solution:
    def maxSumDivThree(self, nums: List[int]) -> int:
        n = len(nums)
        dp = [[0 for j in range(n+1)] for i in range(3)]
        dp[1][0] = -math.inf
        dp[2][0] = -math.inf

        for i in range(1, n+1):
            num = nums[i-1]
            if num % 3 == 0:
                dp[0][i] = max(dp[0][i-1], dp[0][i-1] + num)
                dp[1][i] = max(dp[1][i-1], dp[2][i-1] + num)
                dp[2][i] = max(dp[2][i-1], dp[1][i-1] + num)
            if num % 3 == 1:
                dp[0][i] = max(dp[0][i-1], dp[2][i-1] + num)
                dp[1][i] = max(dp[1][i-1], dp[0][i-1] + num)
                dp[2][i] = max(dp[2][i-1], dp[1][i-1] + num)
            if num % 3 == 2:
                dp[0][i] = max(dp[0][i-1], dp[1][i-1] + num)
                dp[1][i] = max(dp[1][i-1], dp[2][i-1] + num)
                dp[2][i] = max(dp[2][i-1], dp[0][i-1] + num)

        return dp[0][n]
```