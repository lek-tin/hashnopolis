---
title: "Find Peak Element"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "array"]
categories: ["algorithm"]
date: 2018-09-14T11:51:46+08:00
draft: false
archive: false
---
A peak element is an element that is greater than its neighbors.

Given an input array nums, where nums[i] ≠ nums[i+1], find a peak element and return its index.

The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

You may imagine that nums[-1] = nums[n] = -∞.

### Example 1
```
Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.
```
### Example 2
```
Input: nums = [1,2,1,3,5,6,4]
Output: 1 or 5 
Explanation: Your function can return either index number 1 where the peak element is 2, 
             or index number 5 where the peak element is 6.
```
#### Note
Your solution should be in logarithmic complexity.

### Solution
```python
class Solution(object):
    def findPeakElement(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if nums == None and len(nums) == 0:
            return None
        
        peak = 0
        
        for i in range(len(nums)):
            if nums[i] > nums[peak]:
                if i == 0: 
                    if nums[i] > nums[i+1]:
                        peak = i
                elif i == (len(nums)-1):
                    if nums[i] > nums[i-1]:
                        peak = i
                else:
                    if nums[i-1] < nums[i] and nums[i] > nums[i+1]:
                        peak = i
        
        return peak
```