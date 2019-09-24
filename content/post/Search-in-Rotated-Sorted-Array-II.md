---
title: "Search in Rotated Sorted Array II"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "binary-search", "python", "array", "logn"]
categories: ["algorithm"]
date: 2018-08-15T12:50:21+08:00
lastmod: 2019-09-22T12:50:21+08:00
draft: false
archive: false
---
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., `[0,0,1,2,2,5,6]` might become `[2,5,6,0,0,1,2]`).

You are given a target value to search. If found in the array return `true`, otherwise return `false`.

Example 1:
```
Input: nums = [2,5,6,0,0,1,2], target = 0
Output: true
```
Example 2:
```
Input: nums = [2,5,6,0,0,1,2], target = 3
Output: false
```
### Follow-up
- This is a follow up problem to [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/description/), where nums may contain duplicates.
- Would this affect the run-time complexity? How and why?

### Solution
```python
class Solution:
    def search(self, nums: List[int], target: int) -> bool:
        # Time: average is O(logN), worst is o(n)
        # Space: O(1)
        if nums == None or len(nums) == 0:
            return 0
        start, end = 0, len(nums) - 1

        while start + 1 < end:
            print(start, end)
            mid = start + (end - start)//2
            if nums[mid] == target:
                return True
            # Skip duplicate numbers
            if nums[start] == nums[mid]:
                start += 1
            else:
                if nums[start] <= nums[mid]:
                    # Case 1
                    if nums[start] <= target and target <= nums[mid]:
                        end = mid
                    # Case 2
                    else:
                        start = mid
                else:
                    # Case 3
                    if nums[mid] <= target and target <= nums[end]:
                        start = mid
                    # Case 4
                    else:
                        end = mid

        if nums[start] == target:
            return True
        if nums[end] == target:
            return True
        return False
```
4 scenarios when searching
![Search in Rotated Sorted Array](/img/post/search-in-rotated-sorted-array.jpg)