---
title: "Best Time to Buy and Sell Stock"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "python"]
categories: ["algorithm"]
date: 2018-09-06T23:37:49+08:00
draft: false
archive: false
---
Say you have an array for which the `ith` element is the price of a given stock on day `i`.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

### Example 1
```python
Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5. Not 7-1 = 6, as selling price needs to be larger than buying price.
```
### Example 2
```python
Input: [7,6,4,3,1]
Output: 0
```
### Explanation In this case, no transaction is done, i.e. max profit = 0.

### Solution
```python
class Solution:
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        profit, minPrice = 0, 0

        for i in range(len(prices)):
            if i == 0:
                minPrice = prices[i]
            else:
                if (prices[i] < minPrice):
                    minPrice = prices[i]
                elif (prices[i] - minPrice > profit):
                    profit = prices[i] - minPrice

        return profit
```
