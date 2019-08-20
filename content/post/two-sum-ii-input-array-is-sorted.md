---
title: "Two Sum II Input Array Is Sorted"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "sorted-array", "two-pointers"]
categories: ["algorithm"]
date: 2019-08-18T23:53:18+08:00
draft: false
archive: false
---
Given an array of integers that is already sorted in **ascending order**, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

### Note
- Your returned answers (both index1 and index2) are not zero-based.
- You may assume that each input would have exactly one solution and you may not use the same element twice.
### Example
```
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
```
### Solution
```python
# time: o(logn)
# space: o(1)
class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        left, right = 0, len(numbers)-1

        while left < right:
            temp = numbers[left] + numbers[right]
            if temp == target:
                return [left+1, right+1]
            elif temp < target:
                left += 1
            else:
                right -= 1
```
