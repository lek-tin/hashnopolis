---
title: "Find Anagram Mappings"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "hashmap"]
categories: ["algorithm"]
date: 2019-09-17T00:30:24-07:00
lastmod: 2019-09-17T00:30:24-07:00
draft: false
archive: false
---
Given two lists `A` and `B`, and `B` is an anagram of `A`. `B` is an anagram of `A` means `B` is made by randomizing the order of the elements in `A`.  

We want to find an index mapping P, from `A` to B. `A` mapping `P[i] = j` means the ith element in `A` appears in `B` at index j.  

These lists `A` and `B` may contain duplicates. If there are multiple answers, output any of them.  

For example, given
```
A = [12, 28, 46, 32, 50]
B = [50, 12, 32, 46, 28]
```
We should return
```
[1, 4, 3, 2, 0]
as P[0] = 1 because the 0th element of A appears at B[1], and P[1] = 4 because the 1st element of A appears at B[4], and so on.
```
#### Note
1. `A, B` have equal lengths in range `[1, 100]`.
2. `A[i], B[i]` are integers in range `[0, 10^5]`.

### Solution
```python
class Solution:
    def anagramMappings(self, A: List[int], B: List[int]) -> List[int]:
        n = len(A)

        dict_B = {}
        for i in range(n):
            num = B[i]
            dict_B[num] = i

        P = []
        for num in A:
            P.append(dict_B[num])

        return P
```