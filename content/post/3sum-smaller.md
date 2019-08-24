---
title: "3sum Smaller"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode"]
categories: ["algorithm"]
date: 2019-08-22T01:23:49-07:00
draft: false
archive: false
---
Given an array of `n` integers nums and a target, find the number of index triplets `i`, `j`, `k` with `0 <= i < j < k < n` that satisfy the condition `nums[i] + nums[j] + nums[k] < target`.

### Example:
```
Input: nums = [-2,0,1,3], and target = 2
Output: 2 
Explanation: Because there are two triplets which sums are less than 2:
             [-2,0,1]
             [-2,0,3]
```
### Solution
```python
class Solution:
    def threeSumSmaller(self, nums: List[int], target: int) -> int:
        res = 0
        if not nums:
            return res

        nums.sort()
        # No need to skip duplicates
        for i in range(0, len(nums)-2):
            num = nums[i]
            left = i + 1
            right = len(nums) - 1
            while left < right:
                if num + nums[left] + nums[right] < target:
                    # No need to loop from left+1 -> right, simple count them all in
                    res += right - left
                    left += 1
                    # not need to right--
                else:
                    right -= 1

        return res
```