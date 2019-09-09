---
title: "Minimum Size Subarray Sum"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "two-pointers"]
categories: ["algorithm"]
date: 2019-09-08T23:43:48-07:00
draft: false
archive: false
---
Given an array of `n` positive integers and a positive integer `s`, find the minimal length of a **contiguous** subarray of which the `sum ≥ s`. If there isn't one, return `0` instead.

### Example:
```
Input: s = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: the subarray [4,3] has the minimal length under the problem constraint.
Follow up:
If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log n).
```
```python
# time: o(n)
class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        n = len(nums)

        if n == 0:
            return 0

        left = 0
        count = n+1
        currSum = 0

        for i in range(n):
            currSum += nums[i]

            while currSum >= target:
                count = min(count, i - left + 1)
                currSum -= nums[left]
                left += 1

        return 0 if count == n+1 else count
```