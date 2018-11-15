---
title: "Merge Sorted Array"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "python", "sorted-array"]
categories: ["algorithm"]
date: 2018-10-08T13:03:08-07:00
draft: false
archive: false
---
Given two sorted integer arrays `nums1` and `nums2`, merge `nums2` into `nums1` as one sorted array.

**Note:**
The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
**Example:**
```
Input:
```
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3
```
Output: `[1,2,2,3,5,6]`
```
**Solution:**
```python
# Time: o(m+n)
# Space: o(1)
class Solution:
    def merge(self, nums1, m, nums2, n):
        """
        :type nums1: List[int]
        :type m: int
        :type nums2: List[int]
        :type n: int
        :rtype: void Do not return anything, modify nums1 in-place instead.
        """
        i, j, k = m-1, n-1, m+n-1
        while i >= 0 and j >= 0:
            if nums1[i] >= nums2[j]:
                nums1[k] = nums1[i]
                i -= 1
            else:
                nums1[k] = nums2[j]
                j -= 1
            k -= 1
        # nums1 holds the result
        # For example, if nums1 = [7, 8, 9], nums2=[1, 2], when nums1 has been iterated completely(i<0), j needs to keep iterating till it reaches 0 index.
        while j >= 0:
            nums1[k] = nums2[j]
            k -= 1
            j -= 1
```