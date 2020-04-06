---
title: "Maximum Product of Three Numbers"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode"]
categories: ["algorithm"]
date: 2019-10-19T23:01:34-07:00
lastmod: 2019-10-19T23:01:34-07:00
draft: false
archive: false
---
Given an integer array, find three numbers whose product is maximum and output the maximum product.

Example 1:
```
Input: [1,2,3]
Output: 6
```

Example 2:
```
Input: [1,2,3,4]
Output: 24
```

#### Note
1. The length of the given array will be in range `[3,104]` and all elements are in the range `[-1000, 1000]`.
2. Multiplication of any three numbers in the input won't exceed the range of `32-bit` signed integer.

### Solution
```python
class Solution(object):
    def maximumProduct(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """

        min_1, min_2 = float("inf"), float("inf")
        max_1, max_2, max_3 = float("-inf"), float("-inf"), float("-inf")

        for num in nums:
            if num < min_1:
                min_2 = min_1
                min_1 = num
            elif num < min_2:
                min_2 = num

            if num > max_1:
                max_3 = max_2
                max_2 = max_1
                max_1 = num
            elif num > max_2:
                max_3 = max_2
                max_2 = num
            elif num > max_3:
                max_3 = num
        return max(min_1 * min_2 * max_1, max_1 * max_2 * max_3)
```