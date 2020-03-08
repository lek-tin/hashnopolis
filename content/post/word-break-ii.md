---
title: "Word Break II"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "dfs", "dynamic-programming"]
categories: ["algorithm"]
date: 2018-11-29T00:00:35-07:00
lastmod: 2018-11-29T00:00:35-07:00
draft: false
archive: false
---
Given a **non-empty** string s and a dictionary wordDict containing a list of **non-empty** words, add spaces in s to construct a sentence where each word is a valid dictionary word. Return all such possible sentences.

### Note
- The same word in the dictionary may be reused multiple times in the segmentation.
- You may assume the dictionary does not contain duplicate words.
### Example 1
```
Input:
s = "catsanddog"
wordDict = ["cat", "cats", "and", "sand", "dog"]
Output:
[
  "cats and dog",
  "cat sand dog"
]
```
### Example 2
```
Input:
s = "pineapplepenapple"
wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
Output:
[
  "pine apple pen apple",
  "pineapple pen apple",
  "pine applepen apple"
]
Explanation: Note that you are allowed to reuse a dictionary word.
```
### Example 3
```
Input:
s = "catsandog"
wordDict = ["cats", "dog", "sand", "and", "cat"]
Output:
[]
```

### Solution

DFS + Memoization
```python
# Time: O(n^3)
# Space: O(n^3)
class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> List[str]:
        return self.dfs(s, wordDict, {})

    # return all the possible partitions for s
    def dfs(self, s, wordDict, memo):
        # if we have result for s in memo, return immediately
        if s in memo:
            return memo[s]
        # empty string is invalid -> return immediately and we dont memoize it.
        if len(s) == 0:
            return []

        partitions = []

        if s in wordDict:
            partitions.append(s)

        for i in range(1, len(s)):
            word = s[:i]

            if word not in wordDict:
                continue

            sub_partitions = self.dfs(s[i:], wordDict, memo)

            for sub_p in sub_partitions:
                partitions.append(word + " " + sub_p)

        memo[s] = partitions

        return partitions
```

### Solution (Dynamic programming)

```python
```