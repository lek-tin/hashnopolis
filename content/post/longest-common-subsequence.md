---
title: "Longest Common Subsequence"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "java", "dynamic-programming"]
categories: ["algorithm"]
date: 2019-02-15T17:28:18-08:00
draft: false
archive: false
---
The longest common subsequence (LCS) problem is the problem of finding the longest subsequence common to all sequences in a set of sequences (often just two sequences). It differs from the longest common substring problem: unlike substrings, subsequences are not required to occupy consecutive positions within the original sequences.

### Optimal Substructure: 
Let the input sequences be `X[0..m-1] and Y[0..n-1]` of lengths m and n respectively. And let `L(X[0..m-1], Y[0..n-1])` be the length of LCS of the two sequences `X` and `Y`. Following is the recursive definition of `L(X[0..m-1], Y[0..n-1])`.

If last characters of both sequences match (or `X[m-1] == Y[n-1]`) then
`L(X[0..m-1], Y[0..n-1]) = 1 + L(X[0..m-2], Y[0..n-2])`

If last characters of both sequences do not match (or X[m-1] != Y[n-1]) then
`L(X[0..m-1], Y[0..n-1]) = MAX ( L(X[0..m-2], Y[0..n-1]), L(X[0..m-1], Y[0..n-2]) )`

Examples:
Consider the input strings “MASOQB” and “OQNXAYB”. Last characters match for the strings. So length of LCS can be written as:
`L(“MASOQB”, “OQNXAYB”) = 1 + L(“MASOQ”, “OQNXAY”)`

### Solution:

```java
class Solution {
    public int longestCommonSubsequence(String text1, String text2) {
        int N, M;
        N = text1.length();
        M = text2.length();
        int[][] dp = new int[N+1][M+1];

        for (int i = 0; i <= N; i++) {
            for (int j = 0; j <= M; j++) {
                if (i == 0 || j == 0)
                    continue;
                else if ( text1.charAt(i-1) == text2.charAt(j-1) )
                    dp[i][j] = dp[i-1][j-1] + 1;
                else
                    dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }
        }

        return dp[N][M];
    }
}
```
