---
title: "First Missing Positive"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "hashmap"]
categories: ["algorithm"]
date: 2020-03-09T02:53:01-07:00
lastmod: 2020-03-09T02:53:01-07:00
draft: false
archive: false
---
Given an unsorted integer array, find the smallest missing positive integer.

### Example 1

```
Input: [1,2,0]
Output: 3
```

### Example 2

```
Input: [3,4,-1,1]
Output: 2
```

### Example 3

```
Input: [7,8,9,11,12]
Output: 1
```


### Solution (hashmap)

Time: `O(N)`  
Space: `O(N)`
```python
from collections import Counter

class Solution:
    def firstMissingPositive(self, nums: List[int]) -> int:
        counter = Counter(nums)

        curr = 1
        while True:
            if curr not in counter:
                return curr
            curr += 1
```

#### Follow-up

1. Your algorithm should run in `O(n)` time and uses **constant** extra space.

### Solution (Index as a hash key)

constant space since we modify nums in-place
```python
class Solution:
    def firstMissingPositive(self, nums: List[int]) -> int:
        N = len(nums)

        # edge case
        if 1 not in nums:
            return 1
        if N == 1:
            return 2

        # nums will only contain positive numbers in range: [1, N]
        for i in range(N):
            if nums[i] <= 0 or nums[i] > N:
                nums[i] = 1

        for i in range(N):
            a = abs(nums[i])
            # If you meet number a in the array - change the sign of a-th element.
            # Be careful with duplicates : do it only once.
            # Use index 0 to save an information about presence of number n since index n is not available.
            if a == N:
                nums[0] = - abs(nums[0])
            else:
                nums[a] = - abs(nums[a])

        for i in range(1, N):
            if nums[i] > 0:
                return i

        if nums[0] > 0:
            return N

        return N+1
```