---
title: "Subarray Product Less Than K"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "sliding-window", "two-pointers"]
categories: ["algorithm"]
date: 2019-09-10T00:38:42-07:00
draft: false
archive: false
---
Your are given an array of positive integers `nums`.  

Count and print the number of (contiguous) subarrays where the product of all the elements in the subarray is less than `k`.

### Example 1:
```
Input: nums = [10, 5, 2, 6], k = 100
Output: 8
Explanation: The 8 subarrays that have product less than 100 are: [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6].
Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
```
### Note:
3. `0 < nums.length <= 50000`.
2. `0 < nums[i] < 1000`.
1. `0 <= k < 10^6`.

### Solution
```python
class Solution:
    def numSubarrayProductLessThanK(self, nums: List[int], k: int) -> int:
        n = len(nums)

        if n < 0 or k <= 1:
            return 0

        res = 0
        left = 0
        product = 1

        for i in range(n):
            product *= nums[i]
            while product >= k:
                product /= nums[left]
                left += 1
            res += i - left + 1

        return res
```