---
title: "Android Unlock Patterns"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "dfs"]
categories: ["algorithm"]
date: 2020-03-31T20:08:24-07:00
lastmod: 2020-03-31T20:08:24-07:00
draft: false
archive: false
---
Given an Android `3x3` key lock screen and two integers `m` and `n`, where `1 ≤ m ≤ n ≤ 9`, count the total number of unlock patterns of the Android lock screen, which consist of minimum of `m` keys and maximum `n` keys.

**Rules for a valid pattern:**

1. Each pattern must connect at least m keys and at most n keys.  
2. All the keys must be distinct.  
3. If the line connecting two consecutive keys in the pattern passes through any other keys, the other keys must have previously selected in the pattern. No jumps through non selected key is allowed.  
4. The order of keys used matters.   

![android unlock example](/img/post/android-unlock-example.png)

#### Explanation

```
| 1 | 2 | 3 |
| 4 | 5 | 6 |
| 7 | 8 | 9 |
```

**Invalid move**: 4 - 1 - 3 - 6  
Line 1 - 3 passes through key 2 which had not been selected in the pattern.  

**Invalid move**: 4 - 1 - 9 - 2  
Line 1 - 9 passes through key 5 which had not been selected in the pattern.  

**Valid move**: 2 - 4 - 1 - 3 - 6  
Line 1 - 3 is valid because it passes through key 2, which had been selected in the pattern  

**Valid move**: 6 - 5 - 4 - 1 - 9 - 2  
Line 1 - 9 is valid because it passes through key 5, which had been selected in the pattern.  

### Example

```
Input: m = 1, n = 1
Output: 9
```

### Solution

```python
class Solution:
    def numberOfPatterns(self, m: int, n: int) -> int:
        skips = [ [0 for j in range(10)] for i in range(10) ]
        skips[1][3] = skips[3][1] = 2
        skips[3][9] = skips[9][3] = 6
        skips[1][7] = skips[7][1] = 4
        skips[7][9] = skips[9][7] = 8
        skips[1][9] = skips[9][1] = 5
        skips[2][8] = skips[8][2] = 5
        skips[3][7] = skips[7][3] = 5
        skips[4][6] = skips[6][4] = 5
        visited = [ False for _ in range(10) ]
        res = 0

        for i in range(m, n+1):
            res += self.dfs(1, skips, visited, i-1) * 4 # start with 1,3,7,9 are the same
            res += self.dfs(2, skips, visited, i-1) * 4 # start with 2,4,6,8 are the same
            res += self.dfs(5, skips, visited, i-1) # start with 5

        return res

    def dfs(self, curr, skips, visited, remain):
        if remain < 0:
            return 0

        if remain == 0:
            return 1

        visited[curr] = True
        res = 0

        for i in range(1, 10):
            if not visited[i] and (visited[skips[curr][i]] or skips[curr][i] == 0):
                res += self.dfs(i, skips, visited, remain-1)

        visited[curr] = False
        return res
```
