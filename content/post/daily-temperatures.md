---
title: "Daily Temperatures"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "stack"]
categories: ["algorithm"]
date: 2020-03-05T02:24:46-08:00
lastmod: 2020-03-05T02:24:46-08:00
draft: false
archive: false
---
Given a list of daily temperatures `T`, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put `0` instead.  

For example, given the list of temperatures `T = [73, 74, 75, 71, 69, 72, 76, 73]`, your output should be `[1, 1, 4, 2, 1, 1, 0, 0]`.

#### Note

The length of temperatures will be in the range `[1, 30000]`. Each temperature will be an integer in the range `[30, 100]`.

### Solution (stack)

Day n -> Day 1  
Time: `O(n)`  
Space: `O(n)`  
```python
class Solution:
    def dailyTemperatures(self, T: List[int]) -> List[int]:
        stack = []

        res = [0] * len(T)

        for i in range(len(T)-1, -1, -1):
            while stack and T[i] >= T[stack[-1]]:
                stack.pop()

            if stack:
                res[i] = stack[-1]-i

            stack.append(i)

        return res
```

### Solution (bitmap/hashmap)

Because temperatures can only be in `[30, 100]`, if the temperature right now is say, `T[i] = 50`, we only need to check for the next occurrence of `51, 52, ..., 100` and take the one that occurs soonest.  
Time: `O(N * W)`, `W=71`
Space: `O(N + W)`  
```python
class Solution:
    def dailyTemperatures(self, T: List[int]) -> List[int]:
        nxt = [float('inf')] * 102
        ans = [0] * len(T)
        for i in range(len(T) - 1, -1, -1):
            # Use 102 so min(nxt[t]) has a default value
            warmer_index = min(nxt[t] for t in range(T[i]+1, 102))
            print(warmer_index)
            if warmer_index < float('inf'):
                ans[i] = warmer_index - i
            nxt[T[i]] = i
        return ans
```
