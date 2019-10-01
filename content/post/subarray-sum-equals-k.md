---
title: "Subarray Sum Equals K"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "hashmap"]
categories: ["algorithm"]
date: 2019-09-26T15:33:32-07:00
lastmod: 2019-09-26T15:33:32-07:00
draft: false
archive: false
---
Given an array of integers and an integer `k`, you need to find the total number of continuous subarrays whose sum equals to `k`.  

### Example 1:
```
Input:nums = [1,1,1], k = 2
Output: 2
```
### Note:
1. The length of the array is in range `[1, 20,000]`.
2. The range of numbers in the array is `[-1000, 1000]` and the range of the integer `k` is `[-1e7, 1e7]`.

### Solution
```python
class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        n = len(nums)

        if not nums or n == 0:
            return 0

        sums = [nums[0] for _ in range(n)]
        for i in range(1, n):
            sums[i] = sums[i-1] + nums[i]

        mapping = {0: 1}
        count = 0
        for s in sums:
            if s-k in mapping:
                count += mapping[s-k]
            temp = 0
            try:
                temp = mapping[s] + 1
            except:
                temp = 1
            mapping[s] = temp

        return count
```