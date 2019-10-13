---
title: "Guess Number Higher or Lower Ii"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "dynamic-programming"]
categories: ["algorithm"]
date: 2019-09-19T23:33:43-07:00
lastmod: 2019-09-20T23:33:43-07:00
draft: false
archive: false
---
We are playing the Guess Game. The game is as follows:  
I pick a number from `1 to n`. You have to guess which number I picked.  
Every time you guess wrong, I'll tell you whether the number I picked is higher or lower.  
However, when you guess a particular number x, and you guess wrong, you pay $x. You win the game when you guess the number I picked.  
### Example:
```
n = 10, I pick 8.

First round:  You guess 5, I tell you that it's higher. You pay $5.
Second round: You guess 7, I tell you that it's higher. You pay $7.
Third round:  You guess 9, I tell you that it's lower. You pay $9.

Game over. 8 is the number I picked.

You end up paying `$5 + $7 + $9 = $21`.
```
Given a particular `n ≥ 1`, find out how much money you need to have to guarantee a win.

### Solution
```python
#                   [i, pivot-1] + pivot + [pivot+1, j]
# cost(i,j) = pivot + max( cost(i,pivot−1), cost(pivot+1,n) )
# n = 10
# dp = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
# index: 0  1  2  3  4  5  6  7  8  9  10
# len = 3
#   start = 4
#     piv = 5
#       res = 5 + max(dp[4][5-1] + dp[5+1][4+3-1])
#       res = 5 + max(dp[4][4] + dp[6][6])

# time: o(n^3)
# space: o(n^2)
import math

class Solution:
    def getMoneyAmount(self, n: int) -> int:
        dp = [[0 for _ in range(n+1)] for _ in range(n+1)]

        for len in range(2, n+1):
            for start in range(1, n-len+2):
                minVal = math.inf
                for pivot in range(start, start+len-1):
                    tempMin = pivot + max(dp[start][pivot-1], dp[pivot+1][start+len-1])
                    minVal = min(minVal, tempMin)
                dp[start][start+len-1] = minVal

        return dp[1][n]
```