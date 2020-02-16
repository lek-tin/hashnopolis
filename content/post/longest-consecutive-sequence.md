---
title: "Longest Consecutive Sequence"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "python", "union-find", "hashmap"]
categories: ["algorithm"]
date: 2019-09-10T12:01:01-08:00
draft: false
archive: false
---
Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

Your algorithm should run in `O(n)` complexity.

### Example
```
Input: [100, 4, 200, 1, 3, 2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
```
### Solution
```python
# Time: `O(n)`
class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        # Count occurence of nums
        mapping = {}
        for num in nums:
            mapping[num] = True
        # init longest length
        longest = 0
        # iterate over nums
        for num in nums:
            if num in mapping:
                # num exists in mapping => init l = 1
                l = 1
                # num was counted, so we delete num
                del mapping[num]
                left, right = num-1, num+1
                # Move left
                while left in mapping:
                    # left was counted, so we delete left
                    del mapping[left]
                    left -= 1
                    l += 1
                # Move right
                while right in mapping:
                    # right was counted, so we delete right
                    del mapping[right]
                    right += 1
                    l += 1
                # Update longest
                longest = max(longest, l)

        return longest
```