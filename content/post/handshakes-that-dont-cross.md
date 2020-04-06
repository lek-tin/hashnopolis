---
title: "Handshakes That Dont Cross"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "dynamic-programming"]
categories: ["algorithm"]
date: 2020-04-02T20:15:25-07:00
lastmod: 2020-04-02T20:15:25-07:00
draft: false
archive: false
---

You are given an even number of people num_people that stand around a circle and each person shakes hands with someone else, so that there are `num_people / 2 `handshakes total.  

Return the number of ways these handshakes could occur such that none of the handshakes cross.  

Since this number could be very big, return the answer `mod 10^9 + 7`  

### Example 1

```
Input: num_people = 2
Output: 1
```

### Example 2

![handshakes that dont cross example 2](/img/post/handshakes-that-dont-cross-example-2.png)
```
Input: num_people = 4
Output: 2
Explanation: There are two ways to do it, the first way is [(1,2),(3,4)] and the second one is [(2,3),(4,1)].
```

### Example 3

![handshakes that dont cross example 3](/img/post/handshakes-that-dont-cross-example-3.png)
```
Input: num_people = 6
Output: 5
```

### Example 4

```
Input: num_people = 8
Output: 14
```

#### Constraints

1. `2 <= num_people <= 1000`
2. `num_people % 2 == 0`

### Solution

```python
class Solution:
    def numberOfWays(self, num_people: int) -> int:
        MOD, N = 10**9+7, num_people//2
        dp = [0] * (N+1)
        dp[0] = 1

        # dp[i] represents # of ways to shake hands when the first person shakes the ith person
        for i in range(1, N+1):
            # if the first person shakes hands with the jth person
            # this divide people into two groups: [2:j-1] and [j+1:N]
            # optimal substructure: if i shakes hands with k, f(i) = f(i) + f(j-1)*f(i-1-j)
            for j in range(i):
                dp[i] = (dp[i] + dp[j]*dp[i-1-j]) % MOD

        return dp[N]
```
