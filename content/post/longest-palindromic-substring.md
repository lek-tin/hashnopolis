---
title: "Longest Palindromic Substring"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "python", "dynamic-programming"]
categories: ["algorithm"]
date: 2019-01-22T22:29:56-08:00
draft: false
archive: false
---
Given a string `s`, find the longest palindromic substring in `s`. You may assume that the maximum length of `s` is 1000.

**Example 1:**
```
Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
```
**Example 2:**
```
Input: "cbbd"
Output: "bb"
```
**Solution:**
Dynamic Programming
```python
# https://leetcode.com/problems/longest-palindromic-substring/discuss/157861/Python3-DP-Solution-with-Lots-of-Comments
# time: O(n^2)
# space: O(n^2)
class Solution(object):
    def longestPalindrome(self, s):
        """
        :type s: str
        :rtype: str
        """
        str_len = len(s)
        if str_len == 0:
            return ""

        # Initialize DP table (dimensions: str_len x str_len)
        memo = [[False for i in range(str_len)] for j in range(str_len)]

        start = 0 # Starting index of the longest palindrome
        max_len = 1 # Length of the longest palindrome

        # Fill DP table for single char palindromes
        for i in range(str_len):
            memo[i][i] = True

        # Fill DP table for 2 char long palindromes
        for i in range(str_len - 1):
            j = i + 1
            if s[i] == s[j]:
                memo[i][j] = True
                start = i
                max_len = 2

        # Fill DP table for palindromes of every other length
        # starting from 3
        length = 3
        for length in range(3, str_len + 1):
            for i in range(str_len - length + 1):
                j = i + (length - 1)
                if s[i] == s[j] and memo[i+1][j-1]:
                    memo[i][j] = True
                    start = i
                    max_len = length

        solution = s[start: start + max_len]

        return solution
```
Dynamic Programming
```python
# time: O(n^2)
# space: O(1)
class Solution(object):
    def __init__(self):
        self.longest = ""

    def longestPalindrome(self, s):
        """
        :type s: str
        :rtype: str
        """
        if s == None or len(s) == 0:
            return ""

        for i in range(len(s)):
            # There are two types of palindromes
            ## "abcbc"
            self.helper(s, i, i)
            ## "axddxa"
            self.helper(s, i, i+1)

        return self.longest

    def helper(self, s, left, right):
        while left >= 0 and right < len(s) and s[left] == s[right]:
            left -= 1
            right += 1
        curr = s[left + 1: right]
        if len(curr) > len(self.longest):
            self.longest = curr
```
```java
class Solution {
    private String res = "";

    public String longestPalindrome(String s) {
        if (s == null || s.length() == 0) return "";
        int n = s.length();

        for (int i = 0; i < n; i++) {
            helper(s, i, i, n);
            helper(s, i, i+1, n);
        }

        return res;
    }

    private void helper(String s, int left, int right, int n) {
        String oldS = s;
        while (left >= 0 && right < n && s.charAt(left) == s.charAt(right)) {
            left--;
            right++;
        }
        StringBuilder newS = new StringBuilder();
        for (int i = left+1; i < right; i++) {
            newS.append(s.charAt(i));
        };

        if (newS.toString().length() > res.length()) {
            res = newS.toString();
        }
    };
}
```