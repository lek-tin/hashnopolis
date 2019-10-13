---
title: "Continuous Subarray Sum"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "subarray", "hashtable"]
categories: ["algorithm"]
date: 2019-10-11T22:18:54-07:00
lastmod: 2019-10-11T22:18:54-07:00
draft: false
archive: false
---
Given a list of **non-negative** numbers and a target **integer** `k`, write a function to check if the array has a continuous subarray of size at least 2 that sums up to a multiple of `k`, that is, sums up to `n*k` where `n` is also an **integer**.

### Example 1:
```
Input: [23, 2, 4, 6, 7],  k=6
Output: True
Explanation: Because [2, 4] is a continuous subarray of size 2 and sums up to 6.
```
### Example 2:
```
Input: [23, 2, 6, 4, 7],  k=6
Output: True
Explanation: Because [23, 2, 6, 4, 7] is an continuous subarray of size 5 and sums up to 42.
```

### Note:
1. The length of the array won't exceed `10,000`.
2. You may assume the sum of all the numbers is in the range of a signed `32-bit` integer.

### Solution
```python
class Solution:
    def checkSubarraySum(self, nums: List[int], k: int) -> bool:
        remainder = 0

        if not nums or len(nums) == 0:
            return False

        # we init lookup with {0:-1} because we want to disregard the first element if
        # it is a multiple of k
        lookup = {0: -1}
        for i, num in enumerate(nums):
            remainder += num
            # k=0 is a valid input, but we cannot devide a number with 0
            # that's why we test k == 0 here
            if k:
                remainder %= k
            if remainder in lookup:
                # if a remainder value exists in lookup, it means we have a subarray whose sum
                # is a multiple of k
                j = lookup[remainder]
                # but if j = i+1, it means that subarray is a single element array
                if i - j > 1:
                    return True
            else:
                lookup[remainder] = i

        return False
```