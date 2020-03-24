---
title: "Combinations"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "python"]
categories: ["algorithm"]
date: 2018-09-10T21:41:18+08:00
lastmod: 2020-03-15T21:41:18+08:00
draft: false
archive: false
---
Given two integers `n` and `k`, return all possible combinations of k numbers out of `1 ... n`.

### Example
```
Input: n = 4, k = 2
Output:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
```

### Solution
```python
class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        def backtrack(start = 1, curr = []):
            # if the combination is done
            if len(curr) == k:
                output.append(curr[:])
                return
            for i in range(start, n + 1):
                # add i into the current combination
                curr.append(i)
                # use next integers to complete the combination
                backtrack(i + 1, curr)
                # backtrack
                curr.pop()

        output = []
        backtrack()

        return output
```