---
title: "4. Median of Two Sorted Arrays"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "python", "array", "sorted-array", "binary-search"]
categories: ["algorithm"]
date: 2018-08-21T20:54:32+08:00
draft: false
archive: false
---
There are two sorted arrays nums1 and nums2 of size `m` and `n` respectively.

Find the median of the two sorted arrays. The overall run time complexity should be `O(log (m+n))`.

You may assume nums1 and nums2 cannot be both empty.

 

Example 1:
```
nums1 = [1, 3]
nums2 = [2]
```
The median is 2.0  
Example 2:
```
nums1 = [1, 2]
nums2 = [3, 4]
```
The median is (2 + 3)/2 = 2.5  

**Solution:**
```python
import math

class Solution:
    def findMedianSortedArrays(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: float
        """
        if len(nums1) > len(nums2):
            return self.findMedianSortedArrays(nums2, nums1)

        len1, len2 = len(nums1), len(nums2)
        start, end = 0, len1

        while start <= end:
            pos1 = (start + end) // 2
            pos2 = (len(nums1) + len(nums2) + 1) // 2 - pos1

            maxLeft1 = -math.inf if pos1 == 0 else nums1[pos1-1]
            minRight1 = math.inf if pos1 == len1 else nums1[pos1]
            print(maxLeft1, minRight1)
            maxLeft2 = -math.inf if pos2 == 0 else nums2[pos2-1]
            minRight2 = math.inf if pos2 == len2 else nums2[pos2]
            print(maxLeft2, minRight2)
            # Found the middle elements, now see if the conbined length is even or odd.
            if maxLeft1 <= minRight2 and maxLeft2 <= minRight1:
                if (len1 + len2) % 2 ==0:
                    return (max(maxLeft1, maxLeft2) + min(minRight1, minRight2)) / 2
                else:
                    return max(maxLeft1, maxLeft2)
            # Too far on the right side for partition 1
            if maxLeft1 > minRight2:
                end = pos1 - 1
            # Too far on the left side for partition 1
            else:
                start = pos1 + 1
            print('--------')
```
**Credit:**  
<a href="https://www.youtube.com/watch?v=LPFhl65R7ww" target="_blank">Tusher Roy</a>