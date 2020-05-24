---
title: "Best Time to Buy and Sell Stock III"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "dynamic-programming"]
categories: ["algorithm"]
date: 2019-11-29T23:12:48-08:00
lastmod: 2019-11-29T23:12:48-08:00
draft: false
archive: false
---
Say you have an array for which the i<sup>th<sup> element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete at most two transactions.

#### NOTE: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

### Example 1
```
Input: [3,3,5,0,0,3,1,4]
Output: 6
Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
             Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.
```

### Example 2
```
Input: [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
             Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
             engaging multiple transactions at the same time. You must sell before buying again.
```

### Example 3
```
Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
```

### Solution
Dynamic programming
```python
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        if not prices:
            return 0

        n = len(prices)
        dp = [[0] * n for _ in range(3)]

        for i in range(1, 3):
            # money spent at first day
            prev = dp[i - 1][0] - prices[0]
            for j in range(1, n):
                # money spent if sell stock today
                deal = prev + prices[j]
                # compare money spent if don't sell stock today with sell stock today
                dp[i][j] = max(dp[i][j - 1], deal)
                # compare i - 1 deals during j days, and don't buy stock today
                # with i - 1 deals during j days, and buy stock today
                prev = max(prev, dp[i - 1][j] - prices[j])

        return dp[-1][-1]
```