---
title: "Valid Triangle Number"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "two-pointers"]
categories: ["algorithm"]
date: 2019-08-25T01:33:06-07:00
draft: false
archive: false
---
Given an array consists of non-negative integers, your task is to count the number of triplets chosen from the array that can make triangles if we take them as side lengths of a triangle.

### Example 1:
```
Input: [2,2,3,4]
Output: 3
```

### Explanation:
Valid combinations are:  
2,3,4 (using the first 2)
2,3,4 (using the second 2)
2,2,3

#### Note:
1. The length of the given array won't exceed 1000.
2. The integers in the given array are in the range of [0, 1000].

### Solution
```python
class Solution:
    def triangleNumber(self, nums: List[int]) -> int:
        # a + b < c
        # 0 < a, b, c
        if not nums or len(nums) < 3:
            return 0

        nums.sort(reverse=True)
        count = 0

        for i in range(len(nums)-2):
            c = nums[i]
            left, right = i+1, len(nums)-1
            while left < right:
                a, b = nums[left], nums[right]
                if a + b > c:
                    count += right - left
                    left += 1
                else:
                    right -= 1

        return count
```
