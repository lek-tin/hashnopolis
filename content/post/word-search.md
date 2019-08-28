---
title: "Word Search"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "search", "dfs"]
categories: ["algorithm"]
date: 2018-10-15T23:48:28-07:00
draft: false
archive: false
---
Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

### Example
```
board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.
```
### Solution
```python
class Solution:
    def exist(self, board, word):
        """
        :type board: List[List[str]]
        :type word: str
        :rtype: bool
        """
        if board == [] or board is None or len(board) == 0 or len(board[0]) == 0:
            return False

        if word == "":
            return True

        rows, cols = len(board), len(board[0])

        for r in range(rows):
            for c in range(cols):
                if self.can_find(word, 0, board, r, c):
                    # As long as one True is returned, we have found the word
                    return True
        return False


    def can_find(self, word, i, board, r, c):
        # Already found the word
        if i >= len(word):
            return True
        # Beyond boundaries
        if r < 0 or r >= len(board) or c < 0 or c >= len(board[0]):
            return False
        # no match letter
        if word[i] != board[r][c]:
            return False
        # set this position so cannot be used again
        board[r][c] = "#"
        # Increment counter i++
        i += 1
        # up, right, down and left
        if (self.can_find(word, i, board, r+1, c) or self.can_find(word, i, board, r-1, c) or
                self.can_find(word, i, board, r, c+1) or self.can_find(word, i, board, r, c-1)):
            return True
        else:
            # if False, reset position to letter
            board[r][c] = word[i]
            return False
```