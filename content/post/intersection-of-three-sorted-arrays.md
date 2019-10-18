---
title: "Intersection of Three Sorted Arrays"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "array"]
categories: ["algorithm"]
date: 2019-10-16T19:13:18-07:00
lastmod: 2019-10-16T19:13:18-07:00
draft: false
archive: false
---
Given three integer arrays `arr1`, `arr2` and `arr3` **sorted** in **strictly increasing** order, return a sorted array of **only** the integers that appeared in **all** three arrays.

Example 1:
```
Input: arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8]
Output: [1,5]
Explanation: Only 1 and 5 appeared in the three arrays.
```

### Constraints:
1. `1 <= arr1.length, arr2.length, arr3.length <= 1000`
2. `1 <= arr1[i], arr2[i], arr3[i] <= 2000`

### Solution
Python
```python
class Solution:
    def arraysIntersection(self, arr1: List[int], arr2: List[int], arr3: List[int]) -> List[int]:
        pos2, pos3 = 0, 0
        res = []
        for target in arr1:
            while pos2 < len(arr2) and arr2[pos2] < target:
                pos2 += 1
            while pos3 < len(arr3) and arr3[pos3] < target:
                pos3 += 1
            if pos2 < len(arr2) and pos3 < len(arr3):
                if arr2[pos2] == arr3[pos3] == target:
                    res.append(target)

        return res
```