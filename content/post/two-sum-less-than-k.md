---
title: "Two Sum Less Than K"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "two-pointers"]
categories: ["algorithm"]
date: 2019-08-22T00:41:20-07:00
draft: false
archive: false
---
Given an array `A` of integers and integer `K`, return the maximum S such that there exists `i < j` with `A[i] + A[j] = S` and `S < K`. If no `i`, `j` exist satisfying this equation, return `-1`.


### Example 1
```
Input: A = [34,23,1,24,75,33,54,8], K = 60
Output: 58
Explanation:
We can use 34 and 24 to sum 58 which is less than 60.
```
### Example 2
```
Input: A = [10,20,30], K = 15
Output: -1
Explanation:
In this case it's not possible to get a pair sum less that 15.
```
#### Note
1. `1 <= A.length <= 100`
2. `1 <= A[i] <= 1000`
3. `1 <= K <= 2000`
### Solution
```python
class Solution:
    def twoSumLessThanK(self, A: List[int], K: int) -> int:
        A.sort()
        left, right = 0 , len(A)-1
        result = -1

        while left < right:
            temp = A[left] + A[right]
            if K <= temp:
                right -= 1
            else:
                result = max(result, temp)
                left += 1

        return result

```