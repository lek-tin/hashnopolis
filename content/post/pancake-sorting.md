---
title: "Pancake Sorting"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "sort"]
categories: ["algorithm"]
date: 2019-09-15T21:03:31-07:00
lastmod: 2019-09-15T22:39:51-08:00
draft: false
archive: false
---
Given an array `A`, we can perform a pancake flip: We choose some positive integer `k <= A.length`, then reverse the order of the first `k` elements of `A`.  We want to perform zero or more pancake flips (doing them one after another in succession) to sort the array `A`.  

Return the k-values corresponding to a sequence of pancake flips that sort` A`.  Any valid answer that sorts the array within `10 * A.length` flips will be judged as correct.  

### Example 1
```
Input: [3,2,4,1]
Output: [4,2,4,3]
Explanation: 
We perform 4 pancake flips, with k values 4, 2, 4, and 3.
Starting state: A = [3, 2, 4, 1]
After 1st flip (k=4): A = [1, 4, 2, 3]
After 2nd flip (k=2): A = [4, 1, 2, 3]
After 3rd flip (k=4): A = [3, 2, 1, 4]
After 4th flip (k=3): A = [1, 2, 3, 4], which is sorted.
```
### Example 2
```
Input: [1,2,3]
Output: []
Explanation: The input is already sorted, so there is no need to flip anything.
Note that other answers, such as [3, 3], would also be accepted.
```
#### Note
1. `1 <= A.length <= 100`
2. `A[i]` is a permutation of `[1, 2, ..., A.length]`

### Solution
```python
class Solution:
    def pancakeSort(self, nums: List[int]) -> List[int]:
        n = len(nums)
        ks = []
        # We can confidently skip the the last element, which is at index 0, because it is guaranteed to be 1 after the last flip
        for i in range(n-1, 0, -1):
            # suppose the max value in at index 0
            MAX = 0
            for j in range(1, i+1):
                if nums[j] > nums[MAX]:
                    MAX = j
            # MAX != 0 means MAX is not at index 0
            # MAX != i means the number at index i is indeed the WRONG number
            if MAX != 0 and MAX != i:
                ks.append(MAX+1)
                nums[:MAX+1] = reversed(nums[:MAX+1])
                ks.append(i+1)
                nums[:i+1] = reversed(nums[:i+1])
            elif MAX == 0:
                ks.append(i+1)
                nums[:i+1] = reversed(nums[:i+1])
        return ks
```