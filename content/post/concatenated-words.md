---
title: "Concatenated Words"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "dynamic-programming"]
categories: ["algorithm"]
date: 2019-12-12T22:43:05-08:00
lastmod: 2019-12-12T22:43:05-08:00
draft: false
archive: false
---
Given a list of words **(without duplicates)**, please write a program that returns all concatenated words in the given list of words.
A concatenated word is defined as a string that is comprised entirely of at least two shorter words in the given array.

### Example:
```
Input: ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]

Output: ["catsdogcats","dogcatsdog","ratcatdogcat"]

Explanation: "catsdogcats" can be concatenated by "cats", "dog" and "cats"; 
 "dogcatsdog" can be concatenated by "dog", "cats" and "dog"; 
"ratcatdogcat" can be concatenated by "rat", "cat", "dog" and "cat".
```

#### Note
1. The number of elements of the given array will not exceed `10,000`
2. The length sum of elements in the given array will not exceed `600,000`.
3. All the input string will only include lower case letters.
4. The returned elements order does not matter.

### Solution
```python
class Solution:
    def findAllConcatenatedWordsInADict(self, words: List[str]) -> List[str]:
        lookup = set(words)
        result = []
        for word in words:
            N = len(word)
            dp = [False] * (N+1)
            dp[0] = True
            for i in range(N):
                if not dp[i]:
                    continue

                for j in range(i+1, N+1):
                    if j - i < N and word[i:j] in lookup:
                        dp[j] = True

                if dp[len(word)]:
                    result.append(word)
                    break

        return result
```