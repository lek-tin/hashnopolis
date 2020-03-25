---
title: "3sum With Multiplicity"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "two-pointers"]
categories: ["algorithm"]
date: 2019-08-24T14:58:50-07:00
draft: false
archive: false
---
Given an integer array A, and an integer target, return the number of tuples `i, j, k`  such that `i < j < k` and `A[i] + A[j] + A[k] == target`.

As the answer can be very large, return it modulo `10^9 + 7`.

### Example 1
```
Input: A = [1,1,2,2,3,3,4,4,5,5], target = 8
Output: 20
```
#### Explanation:
Enumerating by the values `(A[i], A[j], A[k])`:
(1, 2, 5) occurs 8 times;
(1, 3, 4) occurs 8 times;
(2, 2, 4) occurs 2 times;
(2, 3, 3) occurs 2 times.
### Example 2
```
Input: A = [1,1,2,2,2,2], target = 5
Output: 12
```
#### Explanation:
`A[i] = 1, A[j] = A[k] = 2` occurs 12 times:
We choose one 1 from `[1,1]` in 2 ways,
and two 2s from `[2,2,2,2]` in 6 ways.

#### Note
1. `3 <= A.length <= 3000`
2. `0 <= A[i] <= 100`
3. `0 <= target <= 300`

### Solution
```python
class Solution:
    def threeSumMulti(self, nums: List[int], target: int) -> int:
        if not nums or len(nums)  < 3:
            return -1

        counter = collections.Counter(nums)
        res = 0

        for a in range(101):
            for b in range(a, 101):
                c = target - a - b
                if c > 100 or c < 0:
                    continue
                if a == b and b == c:
                    res += counter[a] * (counter[a] - 1) * (counter[a] - 2) / (1 * 2 * 3)
                elif a == b and b != c:
                    res += counter[a] * (counter[a] - 1) / (1 * 2) * counter[c]
                elif b < c:
                    res += counter[a] * counter[b] * counter[c]

        return int(res % (1e9 + 7))
```