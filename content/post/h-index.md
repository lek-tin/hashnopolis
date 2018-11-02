---
title: "H-Index"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "python"]
categories: ["algorithm"]
date: 2018-10-27T01:07:05-07:00
draft: false
archive: false
---
Given an array of citations (each citation is a non-negative integer) of a researcher, write a function to compute the researcher's h-index.

According to the [definition of _h-index_ on Wikipedia](https://en.wikipedia.org/wiki/H-index): "A scientist has index _h_ if _h_ of his/her _N_ papers have **at least** h citations each, and the other _N − h_ papers have **no more than** h citations each."  
**Example:**
```
Input: citations = [3,0,6,1,5]
Output: 3
```
**Explanation:** `[3,0,6,1,5]` means the researcher has `5` papers in total and each of them had received `3, 0, 6, 1, 5` citations respectively. Since the researcher has `3` papers with at least `3` citations each and the remaining two with no more than `3` citations each, her _h-index_ is `3`.
**Note:** If there are several possible values for _h_, the maximum one is taken as the _h-index_.
**Solution:**
```python
class Solution:
    def hIndex(self, citations):
        """
        :type citations: List[int]
        :rtype: int
        """
        citations.sort(reverse=True)
        hIndex = 0
        for i in range(len(citations)):
            if i < citations[i]:
                hIndex = i + 1
        return hIndex
```