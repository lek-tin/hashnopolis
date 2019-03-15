---
title: "Design Tic Tac Toe"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "design"]
categories: ["algorithm"]
date: 2019-03-11T01:36:25-07:00
draft: false
archive: false
---
Design a Tic-tac-toe game that is played between two players on a `n x n` grid.

You may assume the following rules:
1. A move is guaranteed to be valid and is placed on an empty block.
2. Once a winning condition is reached, no more moves is allowed.
3. A player who succeeds in placing n of their marks in a horizontal, vertical, or diagonal row wins the game.
### Example:
```
Given n = 3, assume that player 1 is "X" and player 2 is "O" in the board.

TicTacToe toe = new TicTacToe(3);

toe.move(0, 0, 1); -> Returns 0 (no one wins)
|X| | |
| | | |    // Player 1 makes a move at (0, 0).
| | | |

toe.move(0, 2, 2); -> Returns 0 (no one wins)
|X| |O|
| | | |    // Player 2 makes a move at (0, 2).
| | | |

toe.move(2, 2, 1); -> Returns 0 (no one wins)
|X| |O|
| | | |    // Player 1 makes a move at (2, 2).
| | |X|

toe.move(1, 1, 2); -> Returns 0 (no one wins)
|X| |O|
| |O| |    // Player 2 makes a move at (1, 1).
| | |X|

toe.move(2, 0, 1); -> Returns 0 (no one wins)
|X| |O|
| |O| |    // Player 1 makes a move at (2, 0).
|X| |X|

toe.move(1, 0, 2); -> Returns 0 (no one wins)
|X| |O|
|O|O| |    // Player 2 makes a move at (1, 0).
|X| |X|

toe.move(2, 1, 1); -> Returns 1 (player 1 wins)
|X| |O|
|O|O| |    // Player 1 makes a move at (2, 1).
|X|X|X|
```
### Follow up:
Could you do better than `O(n2)` per `move()` operation?

### Solution
```java
class TicTacToe {
    private int[] rows;
    private int[] cols;
    private int diagonal_1; // top left to bottom right: ↘
    private int diagonal_2; // bottom left to top right: ↗

    /** Initialize your data structure here. */
    public TicTacToe(int n) {
        // sum of cells in each row
        rows = new int[n];
        // sum of cells in each col
        cols = new int[n];
    }

    /**
        Player {player} makes a move at ({row}, {col}).
        @param row The row of the board.
        @param col The column of the board.
        @param player The player, can be either 1 or 2.
        @return The current winning condition, can be either:
        0: No one wins.
        1: Player 1 wins.
        2: Player 2 wins.
    **/
    public int move(int row, int col, int player) {
        // Palyer 1: 1
        // Player 2: -1
        int toAdd = player == 1 ? 1 : -1;
        int size = rows.length;

        rows[row] += toAdd;
        cols[col] += toAdd;
        // top left to bottom right: ↘
        if (row == col) diagonal_1 += toAdd;
        // bottom left to top right: ↗
        if (col == (cols.length - row - 1)) diagonal_2 += toAdd;

        if (Math.abs(rows[row]) == size  ||
            Math.abs(cols[col]) == size  ||
            Math.abs(diagonal_1) == size ||
            Math.abs(diagonal_2) == size) {
            return player;
        }

        return 0;
    }
}

/**
 * Your TicTacToe object will be instantiated and called as such:
 * TicTacToe obj = new TicTacToe(n);
 * int param_1 = obj.move(row,col,player);
 */
```