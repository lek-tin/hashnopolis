---
title: "Maximum Product Subarray"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "dynamic-programming"]
categories: ["algorithm"]
date: 2019-09-04T23:44:12-07:00
draft: false
archive: false
---
Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

### Example 1:
```
Input: [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
```
### Example 2:
```
Input: [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
```
### Solution
```python
# time: `O(n)`
class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        n = len(nums)
        if n == 0:
            return 0

        res = currMax = currMin = nums[0]

        for i in range(1, n):
            newCurrMax = max( max(currMax * nums[i], currMin * nums[i]), nums[i] )
            newCurrMin = min( min(currMax * nums[i], currMin * nums[i]), nums[i] )
            currMax, currMin = newCurrMax, newCurrMin
            res = max(currMax, res)

        return res
```