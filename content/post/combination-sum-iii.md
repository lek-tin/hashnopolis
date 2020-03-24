---
title: "Combination Sum III"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "dfs", "backtracking"]
categories: ["algorithm"]
date: 2018-09-10T21:42:37+08:00
lastmod: 2020-03-08T21:42:37+08:00
draft: false
archive: false
---
Find all possible combinations of `k` numbers that add up to a number `n`, given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.

Note:

All numbers will be positive integers.
The solution set must not contain duplicate combinations.
### Example 1

```
Input: k = 3, n = 7
Output: [[1,2,4]]
```

### Example 2

```
Input: k = 3, n = 9
Output: [[1,2,6], [1,3,5], [2,3,4]]
```


### Solution

```python
class Solution:
    def combinationSum3(self, k: int, n: int) -> List[List[int]]:
        # Equivalent to subsets
        results = []
        combination = []
        # Start DFS
        self.dfs(1, combination, k, n, results)
        return results

    def dfs(self, start, combination, k, target, results):
        if target < 0 or k < 0:
            return

        if target == 0 and k == 0:
            results.append(combination[:])
            return

        for num in range(start, 10):
            if target < num:
                return
            combination.append(num)
            self.dfs(num+1, combination, k-1, target-num, results)
            combination.pop()
```

### Note

Order doesn't matter!  
`[1, 2, 3, 5, 6, 7, 8, 9]`  
 👇  
`[2, 3, 5, 6, 7, 8, 9]`  
 👇  
`[3, 5, 6, 7, 8, 9]`  
