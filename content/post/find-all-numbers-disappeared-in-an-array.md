---
title: "Find All Numbers Disappeared in an Array"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "index-array", "array"]
categories: ["algorithm"]
date: 2020-03-09T04:27:08-07:00
lastmod: 2020-03-09T04:27:08-07:00
draft: false
archive: false
---
Given an array of integers where `1 ≤ a[i] ≤ n (n = size of array)`, some elements appear twice and others appear once.  

Find all the elements of `[1, n]` inclusive that do not appear in this array.  

Could you do it without extra space and in `O(n)` runtime? You may assume the returned list does not count as extra space.  

### Example

```
Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]
```

### Solution

```python
class Solution:
    def findDisappearedNumbers(self, nums: List[int]) -> List[int]:
        N = len(nums)
        result = []
        for num in nums:
            pos = abs(num) % N
            if nums[pos] > 0:
                nums[pos] = -nums[pos]

        for i in range(1, N+1):
            if nums[i%N] > 0:
                result.append(i)

        return result
```