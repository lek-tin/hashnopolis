---
title: "Longest Continuous Increasing Subsequence"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "python", "array"]
categories: ["algorithm"]
date: 2018-12-19T10:40:26-08:00
draft: false
archive: false
---
Given an unsorted array of integers, find the length of longest `continuous` increasing subsequence (subarray).

**Example 1:**
```
Input: [1,3,5,4,7]
Output: 3
Explanation: The longest continuous increasing subsequence is [1,3,5], its length is 3.
Even though [1,3,5,7] is also an increasing subsequence, it's not a continuous one where 5 and 7 are separated by 4.
```
**Example 2:**
```
Input: [2,2,2,2,2]
Output: 1
Explanation: The longest continuous increasing subsequence is [2], its length is 1.
```
**Note:** Length of the array will not exceed `10,000`.
**Solution:**
```python
# Time: o(n)
# Space: o(1)
class Solution:
    def findLengthOfLCIS(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        counts = [0]
        for i in range(len(nums)):
            if i == 0:
                counts[i] = 1
            else:
                if nums[i] > nums[i-1]:
                    counts.append(counts[i-1] + 1)
                else:
                    counts.append(1)
        return max(counts)
```