---
title: "Squares of a Sorted Array"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "two-pointers", "array"]
categories: ["algorithm"]
date: 2020-02-10T20:20:33-08:00
lastmod: 2020-02-10T20:20:33-08:00
draft: false
archive: false
---
Given an array of integers `A` sorted in **non-decreasing** order, return an array of the squares of each number, also in sorted **non-decreasing** order.

### Example 1
```
Input: [-4,-1,0,3,10]
Output: [0,1,9,16,100]
```
### Example 2
```
Input: [-7,-3,2,3,11]
Output: [4,9,9,49,121]
```

#### Note
1. `1 <= A.length <= 10000`
2. `-10000 <= A[i] <= 10000`
3. `A` is sorted in non-decreasing order.

### Solution
```python
class Solution:
    def sortedSquares(self, A: List[int]) -> List[int]:
        result = A[:]
        leftPtr, rightPtr = 0, len(A)-1
        i = 0

        while leftPtr <= rightPtr:
            i += 1
            if abs(A[leftPtr]) <= abs(A[rightPtr]):
                result[-i] =  A[rightPtr] * A[rightPtr]
                rightPtr -= 1
            else:
                result[-i] = A[leftPtr] * A[leftPtr]
                leftPtr += 1

        return result
```