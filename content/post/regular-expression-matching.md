---
title: "Regular Expression Matching"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "python", "dynamic-programming"]
categories: ["algorithm"]
date: 2018-10-12T23:41:01-07:00
draft: true
archive: false
---
Given an input string (s) and a pattern (p), implement regular expression matching with support for `'.'` and `'*'`.

`'.'` Matches any single character.
`'*'` Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).

**Note:**
- s could be empty and contains only lowercase letters `a-z`.
- p could be empty and contains only lowercase letters `a-z`, and characters like `.` or `*`.
**Example 1:**
```
Input:
s = "aa"
p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
```
**Example 2:**
```
Input:
s = "aa"
p = "a*"
Output: true
Explanation: '*' means zero or more of the precedeng element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
```
**Example 3:**
```
Input:
s = "ab"
p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".
```
**Example 4:**
```
Input:
s = "aab"
p = "c*a*b"
Output: true
Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore it matches "aab".
```
**Example 5:**
```
Input:
s = "mississippi"
p = "mis*is*p*."
Output: false
```
**Solution:**
```python
# Time: o(m*n)
# Space: o(m*n)
# The function prototype should be:
# bool isMatch(const char *s, const char *p) 
# Some examples:
# isMatch("aa","a")       false
# isMatch("aa","aa")      true
# isMatch("aaa","aa")     false
# isMatch("aa", "a*")     true
# isMatch("aa", ".*")     true
# isMatch("ab", ".*")     true
# isMatch("aab", "c*a*b") true

# "aa" ".*" 
# "ab", D.*" "aab", "c*a*b" 
# boolean dp[i][j] means [0-i] s[0~i] == p[0~j]
# // Length = 1 + i + j
# dp[0][0] = true

# 1, p.charAt(j) = s.charAt(i) : dp[i][j] = dp[i-1][j-1]
# 2, If p.charAt(j) = ".": dp[i][j] = dp[i-1][j-1];
# 3, If p.charAt(j) = '*', here are two sub conditions:
#   1, if p.charAt(j-1) != s.charAt(i) :
#     - dp[i][j] = dp[i][j-2] //in this case, c* only counts as empty. E.g., "aab" "c*aab"
#   2, if p.charAt(j-1) = s.charAt(i) or p.charAt(j-1) == "." //  E.g., "aa" == "a*" or "aa" == ".*"
#     - dp[i][j] = dp[i][j-1] // in this case, a* counts as single a
#     - dp[i][j] = dp[i-1][j] //in this case, a* counts as multiple a
#     - dp[i][j] = dp[i][j-2] // in this case, a* counts as empty

```