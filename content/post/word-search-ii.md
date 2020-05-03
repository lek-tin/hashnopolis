---
title: "Word Search II"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "bfs"]
categories: ["algorithm"]
date: 2019-04-08T23:50:33-07:00
lastmod: 2020-04-07T23:50:33-07:00
draft: false
archive: false
---
Given a 2D board and a list of words from the dictionary, find all words in the board.

Each word must be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

### Example:
```
Input:
board = [
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
]
words = ["oath","pea","eat","rain"]

Output: ["eat","oath"]
```

#### Note

1. All inputs are consist of lowercase letters `a-z`.
2. The values of `words` are distinct.

### Solution

Time:  `O(m * n * l)`  
Space: `O(m*n + l)`  
```python
class TrieNode(object):
    # Initialize your data structure here.
    def __init__(self):
        self.isString = False
        self.children = {}

    # Inserts a word into the trie.
    def insert(self, word):
        cur = self
        for c in word:
            if not c in cur.children:
                cur.children[c] = TrieNode()
            cur = cur.children[c]
        cur.isString = True

class Solution:
    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:
        """
        :type board: List[List[str]]
        :type words: List[str]
        :rtype: List[str]
        """
        visited = [[False for j in range(len(board[0]))] for i in range(len(board))]
        result = {}
        trie = TrieNode()
        for word in words:
            trie.insert(word)

        for i in range(len(board)):
            for j in range(len(board[0])):
                self.findBFS(board, trie, 0, i, j, visited, [], result)

        return result.keys()

    def findBFS(self, board, trie, cur, i, j, visited, cur_word, result):
        if not trie or i < 0 or i >= len(board) or j < 0 or j >= len(board[0]) or visited[i][j]:
            return

        if board[i][j] not in trie.children:
            return

        cur_word.append(board[i][j])
        next_node = trie.children[board[i][j]]
        if next_node.isString:
            result["".join(cur_word)] = True

        visited[i][j] = True
        self.findBFS(board, next_node, cur + 1, i + 1, j, visited, cur_word, result)
        self.findBFS(board, next_node, cur + 1, i - 1, j, visited, cur_word, result)
        self.findBFS(board, next_node, cur + 1, i, j + 1, visited, cur_word, result)
        self.findBFS(board, next_node, cur + 1, i, j - 1, visited, cur_word, result)
        visited[i][j] = False
        cur_word.pop()
```
