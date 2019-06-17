---
title: "Contains Duplicate"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "duplicate"]
categories: ["algorithm"]
date: 2018-09-10T21:39:18+08:00
draft: false
archive: false
---
Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

Example 1:
```
Input: [1,2,3,1]
Output: true
```
Example 2:
```
Input: [1,2,3,4]
Output: false
```
Example 3:
```
Input: [1,1,1,3,3,4,3,2,4,2]
Output: true
```

**Solution:**
```python
class Solution:
    def containsDuplicate(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        sortedNums = sorted(nums)
        for i in range(1, len(nums)):
            if sortedNums[i] == sortedNums[i-1]:
                return True
        return False
```