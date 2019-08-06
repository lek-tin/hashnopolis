---
title: "Summary Ranges"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "sorted-array"]
categories: ["algorithm"]
date: 2018-10-31T23:53:52-07:00
draft: false
archive: false
---
Given a sorted integer array without duplicates, return the summary of its ranges.

### Example 1
```
Input:  [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: 0,1,2 form a continuous range; 4,5 form a continuous range.
```
### Example 2
```
Input:  [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: 2,3,4 form a continuous range; 8,9 form a continuous range.
```
### Solution
```python
class Solution:
    def summaryRanges(self, nums):
        """
        :type nums: List[int]
        :rtype: List[str]
        """
        if not nums:
            return []

        ranges = [str(nums[0])]

        for i in range(len(nums)-1):
            if nums[i+1] == nums[i] + 1:
                print(ranges)
                ranges[len(ranges)-1] = ranges[len(ranges)-1].split("->")[0] + "->" + str(nums[i+1])
            else:
                ranges.append(str(nums[i+1]))
        return ranges
```