---
title: "Split Array Into Consecutive Subsequences"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "greedy"]
categories: ["algorithm"]
date: 2020-03-23T03:52:41-07:00
lastmod: 2020-03-23T03:52:41-07:00
draft: false
archive: false
---
Given an array `nums` **sorted** in ascending order, return `true` if and only if you can split it into `1` or more subsequences such that each subsequence consists of consecutive integers and has length at least `3`.  

###  Example 1

```
Input: [1,2,3,3,4,5]
Output: True
Explanation:
You can split them into two consecutive subsequences : 
1, 2, 3
3, 4, 5
```

### Example 2

```
Input: [1,2,3,3,4,4,5,5]
Output: True
Explanation:
You can split them into two consecutive subsequences : 
1, 2, 3, 4, 5
3, 4, 5
```

### Example 3

```
Input: [1,2,3,4,4,5]
Output: False
```

#### Constraints

1. `1 <= nums.length <= 10000`

### Solution

```python
class Solution:
    def isPossible(self, nums: List[int]) -> bool:
        counter = collections.Counter(nums)
        chainTails = collections.Counter()

        # Noted: nums are sorted in ascending order
        for x in nums:
            # x can't be used anymore
            if counter[x] == 0:
                continue
            # if there is a chain ending right before x
            elif chainTails[x] > 0:
                chainTails[x] -= 1
                # move the flag to the next number, as x is the new end of that chain
                chainTails[x+1] += 1
            elif counter[x+1] > 0 and counter[x+2] > 0:
                counter[x+1] -= 1
                counter[x+2] -= 1
                # set the flag for the 4th number
                chainTails[x+3] += 1
            else:
                # no chain >= 3-element long exists
                return False
            # decrement count for x by 1, as x was accounted for once.
            counter[x] -= 1

        return True
```
