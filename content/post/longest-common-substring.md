---
title: "Longest Common Substring"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "dynamic-programming"]
categories: ["algorithm"]
date: 2020-02-16T12:34:38-08:00
lastmod: 2020-02-16T12:34:38-08:00
draft: false
archive: false
---

### Solution:

```java
public class LongestCommonString
{
  /* Returns length of LCS for X[0..m-1], Y[0..n-1] */
  int lcs( char[] X, char[] Y, int m, int n )
  {
    // Size = m + 1, n + 1.
    int L[][] = new int[m+1][n+1];
    Integer result = Integer.MIN_VALUE;

    /* Following steps build L[m+1][n+1] in bottom up fashion. Note
    ** that L[i][j] contains length of LCS of X[0..i-1] and Y[0..j-1]
    */
    for (int i=0; i<=m; i++)
    {
      for (int j=0; j<=n; j++)
      {
        if (i == 0 || j == 0)
            // Initialise L[0][0] = 0
            L[i][j] = 0;
        else if (X[i-1] == Y[j-1])
            // L[1][1] = L[0][0] + 1 = 0 + 1 = 1
            L[i][j] = L[i-1][j-1] + 1;
        else
            L[i][j] = 0;

        if (dp[i][j] > result) {
          result = dp[i][j];
        }
      }
    }

    return result;
}
```
