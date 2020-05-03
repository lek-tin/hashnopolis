---
title: "Contiguous Array"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "dynamic-programming", "prefix-sum", "hashmapclass Solution:
    def findMaxLength(self, nums: List[int]) -> int:
        lookup = {}
        lookup[0] = -1
        max_len = 0
        count = 0
        
        for i, num in enumerate(nums):
            count += 1 if num else -1
            if count in lookup:
                max_len = max(max_len, i-lookup[count])
            else:
                lookup[count] = i
                
        return max_len"]
categories: ["algorithm"]
date: 2020-04-13T00:13:53-07:00
lastmod: 2020-04-13T00:13:53-07:00
draft: false
archive: false
---

Given a binary array, find the maximum length of a contiguous subarray with equal number of `0` and `1`.

### Example 1

```
Input: [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.
```

### Example 2

```
Input: [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
```

#### Note

The length of the given binary array will not exceed 50,000.

### Solution

```python
class Solution:
    def findMaxLength(self, nums: List[int]) -> int:
        lookup = {}
        lookup[0] = -1
        max_len = 0
        count = 0

        for i, num in enumerate(nums):
            count += 1 if num else -1
            if count in lookup:
                max_len = max(max_len, i-lookup[count])
            else:
                lookup[count] = i

        return max_len
```
