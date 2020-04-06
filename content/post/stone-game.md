---
title: "Stone Game"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "dynamic-programming"]
categories: ["algorithm"]
date: 2019-09-04T00:10:31-07:00
draft: true
archive: false
---
Alex and Lee play a game with piles of stones.  There are an even number of piles `arranged in a row`, and each pile has a positive integer number of stones `piles[i]`.

The objective of the game is to end with the most stones.  The total number of stones is odd, so there are no ties.

Alex and Lee take turns, with Alex starting first.  Each turn, a player takes the entire pile of stones from either the beginning or the end of the row.  This continues until there are no more piles left, at which point the person with the most stones wins.

Assuming Alex and Lee play optimally, return `True` if and only if Alex wins the game.


### Example 1
```
Input: [5,3,4,5]
Output: true
Explanation:
Alex starts first, and can only take the first 5 or the last 5.
Say he takes the first 5, so that the row becomes [3, 4, 5].
If Lee takes 3, then the board is [4, 5], and Alex takes 5 to win with 10 points.
If Lee takes the last 5, then the board is [3, 4], and Alex takes 4 to win with 9 points.
This demonstrated that taking the first 5 was a winning move for Alex, so we return true.
```

#### Note
1. `2 <= piles.length <= 500`
2. `piles.length` is even.
3. `1 <= piles[i] <= 500`
4. `sum(piles)` is odd.

### Solution
DFS with memoization
```python
class Solution:
    def stoneGame(self, piles: List[int]) -> bool:
        n = len(piles)
        mem = [ [ None for _ in range(n)] for _ in range(n)]
        return self.search(0, n-1, piles, mem) > 0

    def search(self, left, right, piles, mem):

        if mem[left][right] != None:
            return mem[left][right]

        if left == right:
            return piles[left]

        mem[left][right] = max(
            piles[left] - self.search(left+1, right, piles, mem),
            piles[right] - self.search(left, right-1, piles, mem)
        )

        return mem[left][right]
```
Bottom-up Dynamic programming
```python
import sys
INT_MAX = sys.maxsize

class Solution:
    def stoneGame(self, piles: List[int]) -> bool:
        n = len(piles)
        prefixSum = [ [ INT_MAX for _ in range(n)] for _ in range(n)]
        for i in range(n):
            prefixSum[i][i] = piles[i]

        for size in range(1, n):
            # size = 1, n = 10
            for i in range(0, n-size):
                # left/i: [0, 8], 9 numbers
                # right/j
                j = i + size - 1
                parity = i + j % 2
                # first player moves. A max sum is desired.
                if parity == 1:
                    prefixSum[i][j] = max(
                        piles[i] - prefixSum[i+1][j],
                        piles[j] - prefixSum[i][j-1]
                    )
                # second player moves. A min sum is desired.
                else:
                    prefixSum[i][j] = min(
                        -piles[i] + prefixSum[i+1][j],
                        -piles[j] + prefixSum[i][j-1]
                    )
        # 0 + n - 1 % 2 = 1 => play 1
        return prefixSum[0][-1] > 0
```
credit: <https://massivealgorithms.blogspot.com/2018/11/leetcode-877-stone-game.html?m=1>