---
title: "Largest Component Size by Common Factor"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "graph", "union-find"]
categories: ["algorithm"]
date: 2020-02-11T23:25:11-08:00
lastmod: 2020-02-11T23:25:11-08:00
draft: false
archive: false
---
Given a **non-empty** array of unique positive integers `A`, consider the following graph:  
1. There are `A.length` nodes, labelled `A[0]` to `A[A.length - 1]`;
2. There is an edge between `A[i]` and `A[j]` if and only if `A[i]` and `A[j]` share a common factor greater than `1`.

Return the size of the largest connected component in the graph.  

### Example 1:
```
Input: [4,6,15,35]
Output: 4
```

### Example 2:
```
Input: [20,50,9,63]
Output: 2
```

### Example 3:
```

Input: [2,3,6,7,4,12,21,39]
Output: 8
```

### Note:
1. `1 <= A.length <= 20000`
2. `1 <= A[i] <= 100000`

### Solution
```python
from collections import Counter

class UnionFind:
    def __init__(self, _arrSize):
        self.arr = [i for i in range(_arrSize)]

    def find(self, i):
        # skip "a" looking for "a"
        if self.arr[i] != i:
            self.arr[i] = self.find(self.arr[i])
        return self.arr[i]

    def union(self, a, b):
        # a and b need to be union'ed
        a_root = self.find(a)
        b_root = self.find(b)
        # set a as the root
        self.arr[a_root] = b_root

class Solution:
    def largestComponentSize(self, A: List[int]) -> int:
        fullFactors = []
        for num in A:
            factors = []
            tempFactor = 2
            while tempFactor * tempFactor <= num:
                if num % tempFactor == 0:
                    while num % tempFactor == 0:
                        num /= tempFactor
                    factors.append(tempFactor)
                tempFactor += 1
            if num > 1 or not factors:
                factors.append(num)
            fullFactors.append(factors)

        # Input: [20,50,100,9,63,21,49]
        # factors: [[2, 5.0], [2, 5], [2, 5], [3], [3, 7.0], [3, 7.0], [7]]
        # primes are guaranteed to be sorted
        primes = list({p for factors in fullFactors for p in factors})
        # map each prime to its index
        prime_to_index = {p: i for i, p in enumerate(primes)} # {2: 0, 3: 1, 5.0: 2, 7.0: 3}

        unionFind = UnionFind(len(primes))

        for factors in fullFactors:
            for f in factors:
                unionFind.union(prime_to_index[factors[0]], prime_to_index[f])
        # Counter will count how many times each value in an array appears.
        tempMap = [unionFind.find(prime_to_index[factors[0]]) for factors in fullFactors] # [2, 2, 2, 3, 3, 3, 3]
        counter = Counter(tempMap) # Counter({3: 4, 2: 3})
        return max(counter.values())
```

### Illustration:
![largest component size by common factor 1](/img/post/largest-component-size-by-common-factor-1.jpg)
![largest component size by common factor 2](/img/post/largest-component-size-by-common-factor-2.jpg)