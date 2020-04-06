---
title: "Peak Index in a Mountain Array"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "binary-search"]
categories: ["algorithm"]
date: 2019-09-23T01:02:35-07:00
lastmod: 2019-09-23T01:02:35-07:00
draft: false
archive: false
---
Let's call an array `A` a mountain if the following properties hold:
1. `A.length >= 3`
2. There exists some `0 < i < A.length - 1` such that `A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]`

Given an array that is definitely a mountain, return any i such that `A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]`.

### Example 1
```
Input: [0,1,0]
Output: 1
```
### Example 2
```
Input: [0,2,1,0]
Output: 1
```

#### Note
1. `3 <= A.length <= 10000`
2. `0 <= A[i] <= 10^6`
3. `A` is a mountain, as defined above.

### Solution
```python
class Solution:
    def peakIndexInMountainArray(self, nums: List[int]) -> int:
        if not nums or len(nums) < 3:
            return -1

        start, end = 0, len(nums)-1

        while start + 1 < end:
            mid = start + (end-start)//2
            if nums[mid] < nums[mid-1]:
                end = mid
            elif nums[mid] < nums[mid+1]:
                start = mid
            else:
                return mid
```