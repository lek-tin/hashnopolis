---
title: "Find K Closest Elements"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "python", "binary-search"]
categories: ["algorithm"]
date: 2018-12-19T16:00:58-08:00
draft: false
archive: false
---
Given a sorted array, two integers k and x, find the k closest elements to x in the array. The result should also be sorted in ascending order. If there is a tie, the smaller elements are always preferred.

**Example 1:**
```
Input: [1,2,3,4,5], k=4, x=3
Output: [1,2,3,4]
```
**Example 2:**
```
Input: [1,2,3,4,5], k=4, x=-1
Output: [1,2,3,4]
```
**Note:**
- The value k is positive and will always be smaller than the length of the sorted array.
- Length of the given array is positive and will not exceed 104
- Absolute value of elements in the array and x will not exceed 104
**UPDATE (2017/9/19):**
The arr parameter had been changed to an array of integers (instead of a list of integers). Please reload the code definition to get the latest changes.
**Solution:**
```python
class Solution:
    def findClosestElements(self, arr, k, x):
        """
        :type arr: List[int]
        :type k: int
        :type x: int
        :rtype: List[int]
        """
        low = 0
        high = len(arr) - k

        while low < high:
            mid = (low + high) // 2
            if x - arr[mid] > arr[mid + k] - x:
                low = mid + 1
            else:
                high = mid

        return arr[low:low + k]
```
