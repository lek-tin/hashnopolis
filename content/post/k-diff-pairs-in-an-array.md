---
title: "K Diff Pairs in an Array"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode"]
categories: ["algorithm"]
date: 2020-03-05T01:33:03-08:00
lastmod: 2020-03-05T01:33:03-08:00
draft: false
archive: false
---
Given an array of integers and an integer `k`, you need to find the number of unique `k-diff` pairs in the array. Here a `k-diff` pair is defined as an integer pair `(i, j)`, where `i` and `j` are both numbers in the array and their absolute difference is `k`.  

### Example 1

```
Input: [3, 1, 4, 1, 5], k = 2
Output: 2
Explanation: There are two 2-diff pairs in the array, (1, 3) and (3, 5).
Although we have two 1s in the input, we should only return the number of unique pairs.
```

### Example 2

```
Input:[1, 2, 3, 4, 5], k = 1
Output: 4
Explanation: There are four 1-diff pairs in the array, (1, 2), (2, 3), (3, 4) and (4, 5).
```

### Example 3

```
Input: [1, 3, 1, 5, 4], k = 0
Output: 1
Explanation: There is one 0-diff pair in the array, (1, 1).
```

#### Note

1. The pairs `(i, j)` and `(j, i)` count as the same pair.
2. The length of the array won't exceed `10,000`.
3. All the integers in the given input belong to the range: `[-1e7, 1e7]`.

### Solution (hashmap)

Time: `O(n)`  
Space: `O(n)`  
```python
class Solution:
    def findPairs(self, nums: List[int], k: int) -> int:
        result = {}
        if k < 0:
            return 0
        elif k == 0:
            count = 0
            for num in nums:
                try:
                    result[num] += 1
                except:
                    result[num] = 1
                if result[num] == 2:
                    count += 1
            return count
        else:
            lookup = set(nums)

            for num in lookup:
                # `(i, j)` and `(j, i)` count as one unique pair
                if num-k in lookup:
                    result[num-k] = num
                if num+k in lookup:
                    result[num] = num+k

            return len(result.items())
```
simplified
```python
class Solution:
    def findPairs(self, nums: List[int], k: int) -> int:
        if k < 0: return 0
        result, lookup = set(), set()
        for num in nums:
            if num-k in lookup:
                result.add(num-k)
            if num+k in lookup:
                result.add(num)
            lookup.add(num)
        return len(result)
```