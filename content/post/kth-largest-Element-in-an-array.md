---
title: "Kth Largest Element in an Array"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "quick-select", "two-pointers"]
categories: ["algorithm"]
date: 2018-10-24T23:38:20-07:00
draft: false
archive: false
---
Find the `kth` largest element in an unsorted array. Note that it is the `kth` largest element in the sorted order, not the `kth` distinct element.

### Example 1
```
Input: [3,2,1,5,6,4] and k = 2
Output: 5
```
### Example 2
```
Input: [3,2,3,1,2,4,5,5,6] and k = 4
Output: 4
```

#### Note
You may assume `k` is always valid, `1 ≤ k ≤ array's length`.

### Solution:
Average time complexity: `O(n)` if we don’t need the sorted output, otherwise `O(n+kLogk)`  
`T(n) = T(n/2) + n = n + n/2 + n/4 + ... = n * (1 + 1/2 + 1/4 + ...)`  
Thisa sum of geometric series, which is equal to 2. Therefore the sum is `2n`. So the complexity is `O(n)`.
```python
class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        if not nums or k <= 0 or k > len(nums):
            return -1

        pos, start, end = 0, 0, len(nums)-1
        while True:
            pos = self.partition(nums, start, end)
            if pos+1 == k:
                return nums[pos]
            elif pos+1 > k:
                end = pos-1
            else:
                start = pos+1

    def partition(self, nums, start, end):
        pivot = start
        start += 1
        while start <= end:
            if nums[start] < nums[pivot] and nums[end] > nums[pivot]:
                self.swap(nums, start, end)
                start += 1
                end -= 1
            if nums[start] >= nums[pivot]:
                start += 1
            if nums[end] <= nums[pivot]:
                end -= 1
        self.swap(nums, pivot, end)
        return end

    def swap(self, nums, i, j):
        temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
```