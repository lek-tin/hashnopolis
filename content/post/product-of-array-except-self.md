---
title: "Product of Array Except Self"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "dynamic-programming", "array"]
categories: ["algorithm"]
date: 2018-11-03T16:41:47-07:00
lastmod: 2020-02-26T16:41:47-07:00
draft: false
archive: false
---
Given an array of n integers where `n > 1`, `nums`, return an array output such that `output[i]` is equal to the product of all the elements of nums except `nums[i]`.

Solve it **without division** and in `O(n)`.

For example, given `[1,2,3,4]`, return `[24,12,8,6]`.

### Solution 1
Time: `O(n)`  
Space: `O(n)`  
```python
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        left, right = [nums[0]], [nums[-1]]
        N = len(nums)

        if N <= 1:
            return 0

        res = []
        for i in range(1, N-1):
            left.append(left[-1] * nums[i])
            right.insert(0, right[0] * nums[N-1-i])

        for i in range(N):
            if i == 0:
                res.append(right[0])
            elif i == N-1:
                res.append(left[N-2])
            else:
                res.append(left[i-1] * right[i])

        return res
```

#### Follow-up
Could you solve it with constant space complexity? (Note: The output array does not count as extra space for the purpose of space complexity analysis.)

### Solution 2
Time: `O(n)`
Space: `O(1)`
```python
class Solution(object):
    def productExceptSelf(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        products = [1]  # product of all to left of nums[0] is set to 1
        for i in range(1, len(nums)):
            products.append(nums[i-1] * products[-1])
        print(products)
        right_product = 1
        for i in range(len(nums)-1, -1, -1):
            products[i] *= right_product
            right_product *= nums[i]

        return products
```
