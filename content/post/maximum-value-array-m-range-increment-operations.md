---
title: "Maximum Value Array M Range Increment Operations"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "prefix-sum"]
categories: ["algorithm"]
date: 2019-10-19T22:11:13-07:00
lastmod: 2019-10-19T22:11:13-07:00
draft: false
archive: false
---
Consider an array of size `n` with all initial values as 0, we need to perform following `m` range increment operations.  

`increment(a, b, k)` : Increment values from `a` to `b` by `k`. After `m` operations, we need to calculate the maximum of the values in the array.

### Example 1:
```
Input : n = 5 m = 3
        a = 0, b = 1, k = 100
        a = 1, b = 4, k = 100
        a = 2, b = 3, k = 100
Output : 200
Explanation:
Initially array = {0, 0, 0, 0, 0}
After first operation:
array = {100, 100, 0, 0, 0}
After second operation:
array = {100, 200, 100, 100, 100}
After third operation:
array = {100, 200, 200, 200, 100}
Maximum element after m operations 
is 200.
```
### Example 2:
```
Input : n = 4 m = 3
        a = 1, b = 2, k = 603
        a = 0, b = 0, k = 286
        a = 3, b = 3, k = 882
Output : 882
Explanation:
Initially array = {0, 0, 0, 0}
After first operation:
array = {0, 603, 603, 0}
After second operation:
array = {286, 603, 603, 0}
After third operation:
array = {286, 603, 603, 882}
Maximum element after m operations
is 882.
```

### Solution
Python
```python
def listMax(n, operations):
    # Write your code here

    sums = [0 for _ in range(n+1)]
    for op in operations:
        a = op[0]-1
        b = op[1]-1
        k = op[2]
        sums[a] += k
        sums[b+1] -= k
    res, total = -math.inf, 0
    for sum in sums:
        total += sum
        res = max(res, total)

    return res
```