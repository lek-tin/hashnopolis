---
title: "Word Break"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "dynamic-programming", "bfs"]
categories: ["algorithm"]
date: 2018-10-10T23:57:15-07:00
draft: false
archive: false
---
Given a **non-empty** string s and a dictionary wordDict containing a list of **non-empty** words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

### Note
- The same word in the dictionary may be reused multiple times in the segmentation.
- You may assume the dictionary does not contain duplicate words.
### Example 1
```
Input: s = "leetcode", wordDict = ["leet", "code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
```
### Example 2
```
Input: s = "applepenapple", wordDict = ["apple", "pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
```
Note that you are allowed to reuse a dictionary word.
### Example 3
```
Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
Output: false
```
### Solution (Dynamic programming)

```python
class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        if not wordDict:
            return False

        n = len(s)
        flags = [True] + [False] * n
        # leetcode
        # ["leet", "code"]
        # flags[0] = flags[4] = flags[8] = True
        for i in range(1, n+1):
            for j in range(i):
                substring = s[j:i]
                print(substring)
                if flags[j] and substring in wordDict:
                    # can break at (i-1)
                    print(j, i)
                    flags[i] = True
                    break
            print("-------")

        return flags[n]
```

### Solution (BFS)

```python
from collections import deque

class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        if not wordDict:
            return False

        n = len(s)
        visited = [False for i in range(n)]
        q = deque([])
        q.append(0)

        while len(q) > 0:
            start = q.popleft()
            if not visited[start]:
                for end in range(start+1, n+1):
                    substring = s[start:end]
                    if substring in wordDict:
                        q.append(end)
                        # reach the end, return True
                        if end == n:
                            return True
                # mark start as visited
                visited[start] = True
        # Not found
        return False
```
