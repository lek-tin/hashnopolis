---
title: "Count Primes"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "sieve-of-eratosthenes", "prime-number"]
categories: ["algorithm"]
date: 2018-11-09T18:52:59-08:00
draft: false
archive: false
---
Count the number of prime numbers less than a _non-negative_ number, `n`.

**Example:**
```
Input: 10
Output: 4
```
**Explanation:** There are `4` prime numbers less than `10`, they are `2, 3, 5, 7`.
**Solution:**
```python
class Solution:
    def countPrimes(self, n):
        """
        :type n: int
        :rtype: int
        """
        if n <= 2:
            return 0
        marked = [0] * (n-1)
        for i in range(int(n**0.5)+1):
            if marked[i] != 1:
                prime = i + 2
                for j in range(prime**2-2, n-1, prime):
                    marked[j] = 1
        count = 0
        for c, k in enumerate(marked):
            # We are counting numbers less than n, hence len(marked)-1
            if k == 0 and c < len(marked)-1:
                count += 1
        return count
```