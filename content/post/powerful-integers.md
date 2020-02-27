---
title: "Powerful Integers"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "math"]
categories: ["algorithm"]
date: 2020-02-14T02:12:57-08:00
lastmod: 2020-02-14T02:12:57-08:00
draft: false
archive: false
---
Given two positive integers `x` and `y`, an integer is powerful if it is equal to `x^i` + `y^j` for some integers `i >= 0` and `j >= 0`.  

Return a list of all powerful integers that have value less than or equal to bound.  

You may return the answer in any order.  In your answer, each value should occur at most once.  

### Example 1:
```
Input: x = 2, y = 3, bound = 10
Output: [2,3,4,5,7,9,10]
Explanation: 
2 = 2^0 + 3^0
3 = 2^1 + 3^0
4 = 2^0 + 3^1
5 = 2^1 + 3^1
7 = 2^2 + 3^1
9 = 2^3 + 3^0
10 = 2^0 + 3^2
```

### Example 2:
```
Input: x = 3, y = 5, bound = 15
Output: [2,4,6,8,10,14]
```

### Note:
1. `1 <= x <= 100`
2. `1 <= y <= 100`
3. `0 <= bound <= 10^6`

### Hint
If `x^i > bound`, the sum `x^i + y^j` can't be less than or equal to the bound. Similarly for `y^j`.  
Thus, we only have to check for `0 <= i, j <= log_x(bound) < 20`. We can use a HashSet to store all the different values.

### Solution
time: `O(log bound)`
space: `O(log bound)`
```python
class Solution:
    def powerfulIntegers(self, x: int, y: int, bound: int) -> List[int]:
        answers = set()

        # 2^19 < bound < 2^20
        # only from 0 to 19
        for i in range(20):
            for j in range(20):
                v = x**i + y**j
                if v <= bound:
                    answers.add(v)

        return list(answers)
```