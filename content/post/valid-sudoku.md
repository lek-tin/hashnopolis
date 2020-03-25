---
title: "Valid Sudoku"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "matrix"]
categories: ["algorithm"]
date: 2020-03-18T00:27:41-07:00
lastmod: 2020-03-18T00:27:41-07:00
draft: false
archive: false
---

Determine if a `9x9` Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits `1-9` without repetition.
Each column must contain the digits `1-9` without repetition.
Each of the 9 `3x3` sub-boxes of the grid must contain the digits `1-9` without repetition.

![Valid Sudoku example](/img/post/valid-sudoku-example.png)
A partially filled sudoku which is valid.

The Sudoku board could be partially filled, where empty cells are filled with the character `'.'`.

### Example 1

```
Input:
[
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: true
```

### Example 2

```
Input:
[
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being 
    modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
```

#### Note
- A Sudoku board (partially filled) could be valid but is not necessarily solvable.
- Only the filled cells need to be validated according to the

### Solution

```python
class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        if not len(board) or not len(board[0]):
            return False

        if len(board) != 9 or len(board[0]) != 9:
            return False

        rows = [{} for _ in range(9)]
        cols = [{} for _ in range(9)]
        boxes = [{} for _ in range(9)]

        for i in range(9):
            for j in range(9):
                c = board[i][j]
                if c == ".":
                    continue
                if c in rows[i]:
                    return False
                rows[i][c] = 1
                if c in cols[j]:
                    return False
                cols[j][c] = 1
                box_id = (i//3)*3 + (j//3)
                if c in boxes[box_id]:
                    return False
                boxes[box_id][c] = 1

        return True
```