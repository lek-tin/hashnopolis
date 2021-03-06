---
title: "Contains Duplicate II"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "duplicate"]
categories: ["algorithm"]
date: 2018-11-05T00:27:12-08:00
draft: true
archive: false
---
Given an array of integers and an integer _k_, find out whether there are two distinct indices _i_ and _j_ in the array such that `nums[i] = nums[j]` and the `absolute` difference between _i_ and _j_ is at most _k_.

### Example 1
```
Input: nums = [1,2,3,1], k = 3
Output: true
```
### Example 2
```
Input: nums = [1,0,1,1], k = 1
Output: true
```
### Example 3
```
Input: nums = [1,2,3,1,2,3], k = 2
Output: false
```
### Solution
```python
# time: `O(n)`
# space: `O(n)`
class Solution:
    def containsNearbyDuplicate(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: bool
        """
        map = {}

        for i, n in enumerate(nums):
            if map.get(n) != None and i - map[n] <= k:
                return True
            else:
                map[n] = i

        return False
```