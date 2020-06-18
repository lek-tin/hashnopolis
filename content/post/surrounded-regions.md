---
title: "Surrounded Regions"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "dfs"]
categories: ["algorithm"]
date: 2020-03-25T00:30:49-07:00
lastmod: 2020-06-18T00:30:49-07:00
draft: false
archive: false
---

Given a 2D board containing `'X'` and `'O'` (the letter `O`), capture all regions surrounded by `'X'`.  

A region is captured by flipping all `'O'`s into `'X'`s in that surrounded region.  

### Example

```
X X X X
X O O X
X X O X
X O X X
```
After running your function, the board should be:
```
X X X X
X X X X
X X X X
X O X X
```

#### Explanation

Surrounded regions shouldn’t be on the border, which means that any `'O'` on the border of the board are not flipped to `'X'`. Any `'O'` that is not on the border and it is not connected to an `'O'` on the border will be flipped to `'X'`. Two cells are connected if they are adjacent cells connected horizontally or vertically.

### Solution

Find all those `'O'`s on the border and `dfs` from them. Mark all the `'O'`s connected to these **border** `'O'`s as 'W'. Then mark the remaining `'O'`s as `'X'`s. Finally, reverse all the `'W'`s to `'O'`s  
Java
```java
class Solution {
    public void solve(char[][] board) {
        if (board == null || board.length == 0 || board[0].length == 0) return;

        int N = board.length, M = board[0].length;
        markInvalidZeroes(board, N, M);
        flipValidZeroes(board, N, M);
        reverseInvalidZeroes(board, N, M);
    }

    private void markInvalidZeroes(char[][] board, int N, int M) {
        for (int i = 0; i < N; i++) {
            if (board[i][0] == 'O') {
                dfs(board, i, 0);
            }
            if (board[i][M-1] == 'O') {
                dfs(board, i, M-1);
            }
        }

        for (int i = 0; i < M; i++) {
            if (board[0][i] == 'O') {
                dfs(board, 0, i);
            }
            if (board[N-1][i] == 'O') {
                dfs(board, N-1, i);
            }
        }
    }

    private void dfs(char[][] board, int i, int j) {
        int N = board.length, M = board[0].length;
        if (i < 0 || i >= N || j < 0 || j >= M || board[i][j] != 'O') return;

        board[i][j] = 'W';

        int[][] dirs = new int[][]{ {0, 1}, {0, -1}, {1, 0}, {-1, 0} };

        for (int[] dir: dirs) {
            int new_i = i+dir[0], new_j = j+dir[1];
            if (new_i >= 0 || new_i < N || new_j >= 0 || new_j < M || board[i][j] == 'O') {
                dfs(board, new_i, new_j);
            }
        }
    }

    private void flipValidZeroes(char[][] board, int N, int M) {
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < M; j++) {
                if (board[i][j] != 'O') continue;
                board[i][j] = 'X';
            }
        }
    }

    private void reverseInvalidZeroes(char[][] board, int N, int M) {
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < M; j++) {
                if (board[i][j] != 'W') continue;
                board[i][j] = 'O';
            }
        }
    }
}
```

Python
```python
class Solution:
    def solve(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        if not any(board):
            return

        n, m = len(board), len(board[0])
        q = [ij for k in range(max(n,m)) for ij in ((0, k), (n-1, k), (k, 0), (k, m-1))]
        while q:
            i, j = q.pop()
            if 0 <= i < n and 0 <= j < m and board[i][j] == 'O':
                board[i][j] = 'W'
                q += (i, j-1), (i, j+1), (i-1, j), (i+1, j)

        board[:] = [['XO'[c == 'W'] for c in row] for row in board]
```
