---
title: "Find in Mountain Array"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "binary-search"]
categories: ["algorithm"]
date: 2019-09-23T01:36:19-07:00
lastmod: 2019-09-23T01:36:19-07:00
draft: false
archive: false
---
(This problem is an interactive problem.)

You may recall that an array A is a mountain array if and only if:
1. A.length >= 3
2. There exists some `i` with `0 < i < A.length - 1` such that:
    * `A[0] < A[1] < ... A[i-1] < A[i]`
    * `A[i] > A[i+1] > ... > A[A.length - 1]`
Given a mountain array mountainArr, return the minimum index such that mountainArr.get(index) == target.  If such an index doesn't exist, return -1.   

**You can't access the mountain array directly.**  You may only access the array using a `MountainArray` interface: 
1. `MountainArray.get(k)` returns the element of the array at index `k` (0-indexed).
2. `MountainArray.length()` returns the length of the array.
Submissions making more than 100 calls to MountainArray.get will be judged Wrong Answer.  Also, any solutions that attempt to circumvent the judge will result in disqualification.

### Example 1
```
Input: array = [1,2,3,4,5,3,1], target = 3
Output: 2
Explanation: 3 exists in the array, at index=2 and index=5. Return the minimum index, which is 2.
```
### Example 2
```
Input: array = [0,1,2,4,2,1], target = 3
Output: -1
Explanation: 3 does not exist in the array, so we return -1.
```

### Constraints:
1. 13 <= mountain_arr.length() <= 100001
2. `0 <= target <= 10^91`
3. `0 <= mountain_arr.get(index) <= 10^9`

### Solution
```python
# """
# This is MountainArray's API interface.
# You should not implement it, or speculate about its implementation
# """
#class MountainArray:
#    def get(self, index: int) -> int:
#    def length(self) -> int:

class Solution:
    def findInMountainArray(self, target: int, mountain_arr: 'MountainArray') -> int:
        if not mountain_arr:
            return -1

        peak = self.findPeakIndex(mountain_arr)
        print("peak:", mountain_arr.get(peak))
        start, end = 0, peak
        # left: uphill
        while start+1 < end:
            mid = start + (end-start)//2
            if mountain_arr.get(mid) < target:
                start = mid
            else:
                end = mid
        # print(mountain_arr.get(start), mountain_arr.get(end))
        if mountain_arr.get(start) == target:
            return start
        elif mountain_arr.get(end) == target:
            return end

        start, end = peak, mountain_arr.length()-1
        # left: uphill
        while start+1 < end:
            mid = start + (end-start)//2
            if mountain_arr.get(mid) < target:
                end = mid
            else:
                start = mid
        # print(mountain_arr.get(start), mountain_arr.get(end))
        if mountain_arr.get(end) == target:
            return end
        elif mountain_arr.get(start) == target:
            return start
        # not found
        return -1

    def findPeakIndex(self, arr):
        start, end = 0, arr.length()-1

        while start+1<end:
            mid = start+(end-start)//2
            if arr.get(mid-1) > arr.get(mid):
                end = mid
            elif arr.get(mid+1) > arr.get(mid):
                start = mid
            else:
                return mid
```