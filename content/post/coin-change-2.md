---
title: "Coin Change 2"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "dynamic-programming"]
categories: ["algorithm"]
date: 2019-04-06T22:45:41-07:00
draft: false
archive: false
---
You are given coins of different denominations and a total amount of money. Write a function to compute the number of combinations that make up that amount. You may assume that you have infinite number of each kind of coin.   

### Example 1:
```
Input: amount = 5, coins = [1, 2, 5]
Output: 4
Explanation: there are four ways to make up the amount:
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1
```
### Example 2:
```
Input: amount = 3, coins = [2]
Output: 0
Explanation: the amount of 3 cannot be made up just with coins of 2.
```
### Example 3:
```
Input: amount = 10, coins = [10]
Output: 1
```

### Note:
You can assume that
1. `0 <= amount <= 5000`
2. `1 <= coin <= 5000`
3. the number of coins is less than `500`
4. the answer is guaranteed to fit into signed `32-bit` integer

### Solution
```java
class Solution {
    public int change(int amount, int[] coins) {
        int[] combos = new int[amount + 1];
        combos[0] = 1;

        for (int i = 0; i < coins.length; i++) {
            int coin = coins[i];
            for (int j = 1; j <= amount; j++) {
                if (j >= coin) {
                    //NEW combo = combo WITH coin + combo WITHOUT coin
                    combos[j] += combos[j - coin];
                    // System.out.println(Arrays.toString(combos));
                }
            }
        }

        return combos[amount];
    }
}
```
### Hint
<https://youtu.be/jaNZ83Q3QGc>