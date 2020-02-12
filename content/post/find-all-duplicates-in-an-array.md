---
title: "Find All Duplicates in an Array"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "array"]
categories: ["algorithm"]
date: 2020-02-11T00:06:03-08:00
lastmod: 2020-02-11T00:06:03-08:00
draft: false
archive: false
---
Given an array of integers, `1 ≤ a[i] ≤ n (n = size of array)`, some elements appear **twice** and others appear **once**.  

Find all the elements that appear **twice** in this array.  

Could you do it without extra space and in `O(n)` runtime?  

### Example:
```
Input:
[4,3,2,7,8,2,3,1]

Output:
[2,3]
```

### Solution
```python
# Time:  O(n)
# Space: O(1)

class Solution:
    def findDuplicates(self, nums: List[int]) -> List[int]:
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        result = []
        for i in nums:
            if nums[abs(i)-1] < 0:
                result.append(abs(i))
            else:
                nums[abs(i)-1] *= -1
        return result
```