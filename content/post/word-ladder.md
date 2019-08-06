---
title: "Word Ladder"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "bfs", "bidirectional-bfs", "bidirectional-search"]
categories: ["algorithm"]
date: 2018-10-27T01:05:07-07:00
draft: false
archive: false
---
Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:
1. Only one letter can be changed at a time.
2. Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
### Note
- Return 0 if there is no such transformation sequence.
- All words have the same length.
- All words contain only lowercase alphabetic characters.
- You may assume no duplicates in the word list.
- You may assume beginWord and endWord are non-empty and are not the same.
### Example 1
```
Input:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

Output: 5
```
### Explanation As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
return its length 5.
### Example 2
```
Input:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]

Output: 0
```
### Explanation The endWord "cog" is not in wordList, therefore no possible transformation.
### Solution
```python
# time: o(26^(L/2)), L is the length of the word
class Solution:
    def ladderLength(self, beginWord, endWord, wordList):
        """
        :type beginWord: str
        :type endWord: str
        :type wordList: List[str]
        :rtype: int
        """
        wordDict = set(wordList)
        startQ = set()
        endQ = set()
        visited = set()

        if endWord not in wordDict:
            return 0

        startQ.add(beginWord)
        endQ.add(endWord)
        length = 2
        while len(startQ) != 0:
            neighbours = set()
            for node in startQ:
                for i in range(0,len(node)):
                    char_arr = list(node)
                    exclude = ord(node[i]);
                    for j in range(ord('a'),ord('z')+1):
                        if j == exclude:
                            continue

                        char_arr[i] = chr(j)
                        transformedWord = ''.join(char_arr)

                        if transformedWord in endQ:
                            return length

                        if transformedWord in wordDict and transformedWord not in visited:
                            visited.add(transformedWord)
                            neighbours.add(transformedWord)

            if len(endQ) < len(neighbours):
                startQ = endQ
                endQ = neighbours
            else:
                startQ = neighbours
            length += 1

        return 0
```