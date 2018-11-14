---
title: "Remove Invalid Parentheses"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "python", "dfs", "search"]
categories: ["algorithm"]
date: 2018-11-13T16:20:10-08:00
draft: true
archive: false
---
Remove the minimum number of invalid parentheses in order to make the input string valid. Return all possible results.

**Note:** The input string may contain letters other than the parentheses `(` and `)`.

***Example 1:**
```
Input: "()())()"
Output: ["()()()", "(())()"]
```
***Example 2:**
```
Input: "(a)())()"
Output: ["(a)()()", "(a())()"]
```
***Example 3:**
```
Input: ")("
Output: [""]
```
***Solution:**
```python
# Credit: https://leetcode.com/problems/remove-invalid-parentheses/discuss/186597/Very-easy-to-understand-Python-DFS
class Solution(object):
    def removeInvalidParentheses(self, s):
        """
        :type s: str
        :rtype: List[str]
        """
        res = []
        self.left_to_right(s, res, 0, 0)
        return res


    def left_to_right(self, s, res, i_start, j_search_start):
        """
        scan from left to right, remove surplus ')'
        """
        # DFS
        count = 0
        for i in range(i_start, len(s)):
            if s[i] == '(':  # '(
                count += 1
            if s[i] == ')':  # ')
                count -= 1
            # Do nothing if it's neither ')' or '('

            if count < 0:
                # search for ')'
                # j_search_start~i
                for j in range(j_search_start, i + 1):
                    # remove the first ')' among consecutive ones
                    if s[j] == ')' and ((j == j_search_start) or s[j - 1] != s[j]):
                        print('i: %d, j: %d'%(i,j))
                        # remove s[j] and continue searching
                        char_removed = s[:j] + s[j+1:]
                        self.left_to_right(char_removed, res, i,j)
                return  # only search in the char_removed substring

        # if finished removing suplus ')' by scanning left to right,
        # scan for '(' right to left
        self.right_to_left(s, res, len(s)-1, len(s)-1)


    def right_to_left(self, s, res, i_start, j_search_start):
        """
        scan from right to left, remove surplus '('
        append result to res
        """
        # DFS
        count = 0
        for i in range(i_start, -1, -1):  # i_start~0
            if s[i] == ')':  # '(
                count += 1
            if s[i] == '(':  # ')
                count -= 1
            # Do nothing if it's neither ')' or '('

            if count < 0:
                # search for ')'
                # j_search_start~i (right to left)
                for j in range(j_search_start, i-1, -1):
                    # remove the first ')' among consecutive ones (when scanning from right to left)
                    if s[j] == '(' and ((j == j_search_start) or s[j+1] != s[j]):
                        # remove s[j] and continue searching
                        char_removed = s[:j] + s[j+1:]
                        self.right_to_left(char_removed, res, i-1,j-1)
                return

        # base case: finished scanning
        print('found %s'%s)
        res.append(s)
```