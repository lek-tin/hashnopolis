---
title: "Edit Distance"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "python"]
categories: ["algorithm"]
date: 2019-01-17T23:56:53-08:00
draft: true
archive: false
---
Given two words _word1_ and _word2_, find the minimum number of operations required to convert _word1_ to _word2_.

You have the following 3 operations permitted on a word:
1. Insert a character
2. Delete a character
3. Replace a character
### Example 1:
```
Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation:
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')
```
### Example 2:
```
Input: word1 = "intention", word2 = "execution"
Output: 5
Explanation:
intention -> inention (remove 't')
inention -> enention (replace 'i' with 'e')
enention -> exention (replace 'n' with 'x')
exention -> exection (replace 'n' with 'c')
exection -> execution (insert 'u')
```
### Solution:
```java
class Solution {
    public int minDistance(String word1, String word2) {
        // if (word2.length() == 0 || word1.length() == 0) {
        //     return 0;
        // }
        int[][] dp = new int[word2.length()+1][word1.length()+1];

        for (int i = 0; i < word1.length(); i++) {
            dp[0][i] = i;
        }

        for (int i = 1; i < word2.length(); i++) {
            dp[i][0] = i;
        }

        for (int i = 1; i <= word2.length(); i++) {
            for (int j = 1; j <= word1.length(); j++) {
                if (word1.charAt(j) == word2.charAt(i)) {
                    dp[i][j] = dp[i-1][j-1];
                } else {
                    dp[i][j] = 1 + Math.min(Math.min(dp[i-1][j], dp[i][j-1]), dp[i-1][j-1]);
                }
            }
        }

        return dp[word2.length()][word1.length()];
    }
}
```