---
title: "Edit Distance"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "dynamic-programming"]
categories: ["algorithm"]
date: 2019-01-17T23:56:53-08:00
lastmod: 2020-05-31T23:56:53-08:00
draft: false
archive: false
---

Given two words _word1_ and _word2_, find the minimum number of operations required to convert _word1_ to _word2_.

You have the following 3 operations permitted on a word:
1. Insert a character
2. Delete a character
3. Replace a character

### Example 1

```
Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation:
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')
```

### Example 2

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

Java
```java
class Solution {
    public int minDistance(String word1, String word2) {
        if (word1 == null || word2 == null) return -1;
        int N = word1.length(), M = word2.length();

        if (N == 0) return M;
        if (M == 0) return N;

        int[][] dp = new int[N+1][M+1];

        for (int i = 1; i <= N; i++) {
            dp[i][0] = i;
        }

        for (int i = 1; i <= M; i++) {
            dp[0][i] = i;
        }

        for (int i = 0; i < N; i++) {
            for (int j = 0; j < M; j++) {
                if (word1.charAt(i) == word2.charAt(j)) {
                    dp[i+1][j+1] = dp[i][j];
                } else {
                    dp[i+1][j+1] = Math.min(Math.min(dp[i][j+1], dp[i+1][j]), dp[i][j]) + 1;
                }
            }
        }

        return dp[N][M];
    }
}
```
