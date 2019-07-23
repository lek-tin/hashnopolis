---
title: "Generate Parentheses"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "python", "dfs", "backtracking"]
categories: ["algorithm"]
date: 2019-07-22T23:08:05-07:00
draft: false
archive: false
---
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given `n = 3`, a solution set is:
```
[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
```

### Solution
```python
class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        """
        :type n: int
        :rtype: List[str]
        """
        ans = []
        self.dfs(ans, '', 0, 0, n)
        return ans

    def dfs(self, ans, S, left, right, n):
        if len(S) == 2 * n:
            ans.append(S)
            return

        if left < n:
            self.dfs(ans, S+'(', left+1, right, n)

        if right < left:
            self.dfs(ans, S+')', left, right+1, n)
```