---
title: "4. Median of Two Sorted Arrays"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "array", "binary-search"]
categories: ["algorithm"]
date: 2018-08-21T20:54:32+08:00
lastmod: 2019-09-19T20:54:32+08:00
draft: false
archive: false
---
There are two sorted arrays nums1 and nums2 of size `m` and `n` respectively.

Find the median of the two sorted arrays. The overall run time complexity should be `O(log (m+n))`.

You may assume nums1 and nums2 cannot be both empty.

### Example 1:
```
nums1 = [1, 3]
nums2 = [2]
The median is 2.0
```
### Example 2:
```
nums1 = [1, 2]
nums2 = [3, 4]
The median is (2 + 3)/2 = 2.5
```
### Solution:
`Time: O(log(m+n))`
```python
import math

class Solution:
    def findMedianSortedArrays(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: float
        """
        len1, len2 = len(nums1), len(nums2)

        if len1 > len2:
            return self.findMedianSortedArrays(nums2, nums1)

        start, end = 0, len1

        while start <= end:
            # mid1, mid2: number of elements in each array that are used
            mid1 = (start + end) // 2
            mid2 = (len1 + len2 + 1) // 2 - mid1
            print(mid1, mid2)
            maxLeft1 = -math.inf if mid1 == 0 else nums1[mid1-1]
            minRight1 = math.inf if mid1 == len1 else nums1[mid1]
            print(maxLeft1, minRight1)
            maxLeft2 = -math.inf if mid2 == 0 else nums2[mid2-1]
            minRight2 = math.inf if mid2 == len2 else nums2[mid2]
            print(maxLeft2, minRight2)
            # Found the middle elements, now see if the combined length is even or odd.
            if maxLeft1 <= minRight2 and maxLeft2 <= minRight1:
                if (len1 + len2) % 2 ==0:
                    return (max(maxLeft1, maxLeft2) + min(minRight1, minRight2)) / 2
                else:
                    return max(maxLeft1, maxLeft2)
            # Too far to the right-hand side for nums1, move <-
            if maxLeft1 > minRight2:
                end = mid1 - 1
            # Too far to the left-hand side for nums1, move ->
            else:
                start = mid1 + 1
            print('--------')

        return -1
```
```java
class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int len1 = nums1.length;
        int len2 = nums2.length;
        if (len1 > len2) {
            return findMedianSortedArrays(nums2, nums1);
        }
        int start = 0;
        int end = len1;

        // Iterative
        while (start <= end) {
            int pos1 = (start + end) / 2;
            int pos2 = (len1 + len2 + 1) / 2 - pos1;
            double maxLeft1 = (pos1 == 0) ? Integer.MIN_VALUE : nums1[pos1 - 1];
            double minRight1 = (pos1 == len1) ? Integer.MAX_VALUE : nums1[pos1];
            double maxLeft2 = (pos2 == 0) ? Integer.MIN_VALUE : nums2[pos2 - 1];
            double minRight2 = (pos2 == len2) ? Integer.MAX_VALUE : nums2[pos2];
            // Found the middle elements, now see if the combined length is even or odd.
            if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
                if ((len1 + len2) % 2 ==0) {
                    return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
                } else {
                    return Math.max(maxLeft1, maxLeft2);
                }
            }
            // Too far to the right-hand side for nums1, move <-
            else if (maxLeft1 > minRight2) {
                end = pos1 - 1;
            }
            // Too far to the left-hand side for nums1, move ->
            else {
                start = pos1 + 1;
            }
        }
        return -1;
    }
}
```
### Credit:
<a href="https://www.youtube.com/watch?v=LPFhl65R7ww" target="_blank">Tusher Roy</a>