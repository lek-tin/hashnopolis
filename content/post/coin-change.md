---
title: "Coin Change"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "dynamic-programming"]
categories: ["algorithm"]
date: 2019-03-08T23:58:51-08:00
draft: false
archive: false
---
You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return `-1`.

### Example 1:
```
Input: coins = [1, 2, 5], amount = 11
Output: 3 
Explanation: 11 = 5 + 5 + 1
```

### Example 2:
```
Input: coins = [2], amount = 3
Output: -1
```

### Note:
You may assume that you have an infinite number of each kind of coin.

### Solution:
```
if i > coin[j]:
    T[i]       =     min{T[i]        ,  1+T[i - coin[j]]};
    changes     not picking jth coin    picking the jth coin
```
```java
class Solution {
    public int coinChange(int[] coins, int amount) {
        if (coins == null || coins.length == 0 || amount < 0) return -1;

        int[] mem = new int[amount+1];
        int[] marked = new int[amount+1];
        int infLimit = Integer.MAX_VALUE - 1;
        for (int i = 0; i <= amount; i++) {
            if (i == 0) mem[0] = 0;
            else
                mem[i] = infLimit;
            marked[i] = -1;
        }

        for (int i = 0; i < coins.length; i++) {
            int coin = coins[i];
            for (int j = 1; j <= amount; j++) {
                if (j >= coin) {
                    int without = mem[j - coin];
                    if (without + 1 < mem[j]) {
                        mem[j] = without + 1;
                        marked[j] = i;
                    }
                }
            }
        }
        // return Integer.MAX_VALUE;
        return mem[amount] == infLimit ? -1 : mem[amount];
    }
}
```