---
title: "Word Ladder II"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "bfs", "dfs"]
categories: ["algorithm"]
date: 2019-11-30T16:03:43-08:00
lastmod: 2019-11-30T16:03:43-08:00
draft: false
archive: false
---
Given two words (`beginWord` and `endWord`), and a dictionary's word list, find all shortest transformation sequence(s) from `beginWord` to `endWord`, such that:
1. Only one letter can be changed at a time
2. Each transformed word must exist in the word list. Note that beginWord is not a transformed word.

### Note:
1. Return an empty list if there is no such transformation sequence.
2. All words have the same length.
3. All words contain only lowercase alphabetic characters.
4. You may assume no duplicates in the word list.
5. You may assume beginWord and endWord are non-empty and are not the same.

### Example 1:
```
Input:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

Output:
[
  ["hit","hot","dot","dog","cog"],
  ["hit","hot","lot","log","cog"]
]
```

### Example 2:
```
Input:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]

Output: []
```
Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.

### Solution
end   -> start:  bfs
start -> end:    dfs
```python
from collections import deque

class Solution:
    def findLadders(self, beginWord: str, endWord: str, wordList: List[str]) -> List[List[str]]:
        if endWord not in wordList:
            return []

        dict = set(wordList)
        dict.add(beginWord)
        dict.add(endWord)
        distance = {}

        # record distances
        # from endWord to startWord
        self.bfs(endWord, distance, dict)
        # beginWord: "hit"
        # endWord:   "cog"
        # wordList:  ["hot","dot","dog","lot","log","cog"]
        # distance:  {'cog': 0, 'dog': 1, 'log': 1, 'dot': 2, 'lot': 2, 'hot': 3, 'hit': 4}
        results = []
        # backtracking
        self.dfs(beginWord, endWord, distance, dict, [beginWord], results)

        return results

    def bfs(self, start, distance, dict):
        distance[start] = 0
        queue = deque([start])
        while queue:
            word = queue.popleft()
            for next_word in self.get_next_words(word, dict):
                if next_word not in distance:
                    distance[next_word] = distance[word] + 1
                    queue.append(next_word)

    def get_next_words(self, word, dict):
        words = []
        for i in range(len(word)):
            for c in 'abcdefghijklmnopqrstuvwxyz':
                next_word = word[:i] + c + word[i + 1:]
                if next_word != word and next_word in dict:
                    words.append(next_word)
        return words

    def dfs(self, curr, target, distance, dict, path, results):
        if curr == target:
            results.append(list(path))
            return

        for word in self.get_next_words(curr, dict):
            if distance[word] != distance[curr] - 1:
                continue
            path.append(word)
            self.dfs(word, target, distance, dict, path, results)
            path.pop()
```