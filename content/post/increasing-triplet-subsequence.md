---
title: "Increasing Triplet Subsequence"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "python", "two-pointers"]
categories: ["algorithm"]
date: 2018-11-08T22:10:52-08:00
updated_at: 2019-09-15T14:10:52-08:00
draft: false
archive: false
---
Given an unsorted array return whether an increasing subsequence of length 3 exists or not in the array.

Formally the function should:

Return true if there exists `i, j, k`
such that `arr[i] < arr[j] < arr[k]` given `0 ≤ i < j < k ≤ n-1` else return false.
### Note Your algorithm should run in `O(n)` time complexity and `O(1)` space complexity.

### Example 1
```
Input: [1,2,3,4,5]
Output: true
```
### Example 2
```
Input: [5,4,3,2,1]
Output: false
```
### Solution
```python
import sys
INT_MAX = sys.maxsize

class Solution:
    def increasingTriplet(self, nums: List[int]) -> bool:
        if not nums or len(nums) < 3:
            return False
        # min_1 < min_2
        min_1, min_2 = INT_MAX-1, INT_MAX
        for n in nums:
            # use = to skip duplicate value, for example, [1,1,1,1,1,1,1,1,1,1]
            if n <= min_1:
                min_1 = n
            elif n <= min_2:
                min_2 = n
            else:
                return True

        return False
```