---
title: "Snakes and Ladders"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "bfs"]
categories: ["algorithm"]
date: 2019-03-12T01:16:31-07:00
draft: false
archive: false
---
On an `N x N` board, the numbers from `1` to `N*N` are written _boustrophedonically_ **starting from the bottom left of the board**, and alternating direction each row.  For example, for a `6 x 6` board, the numbers are written as follows:
![snakes and ladders board](https://assets.leetcode.com/uploads/2018/09/23/snakes.png)

You start on square `1` of the board (which is always in the last row and first column). Each move, starting from square `x`, consists of the following:

You choose a destination square `S` with number `x+1, x+2, x+3, x+4, x+5, or x+6`, provided this number is `<= N*N`.
(This choice simulates the result of a standard 6-sided die roll: ie., there are always at most 6 destinations.)
If `S` has a snake or ladder, you move to the destination of that snake or ladder.  Otherwise, you move to `S`.
A board square on row r and column c has a "snake or ladder" if `board[r][c] != -1`.  The destination of that snake or ladder is `board[r][c]`.

**Note that you only take a snake or ladder at most once per move**: if the destination to a snake or ladder is the start of another snake or ladder, you do not continue moving.  (For example, if the board is `[[4,-1],[-1,3]]`, and on the first move your destination square is `2`, then you finish your first move at `3`, because you do not continue moving to `4`.)

Return the least number of moves required to reach square N*N.  If it is not possible, return -1.

### Example 1
```
Input: [
[-1,-1,-1,-1,-1,-1],
[-1,-1,-1,-1,-1,-1],
[-1,-1,-1,-1,-1,-1],
[-1,35,-1,-1,13,-1],
[-1,-1,-1,-1,-1,-1],
[-1,15,-1,-1,-1,-1]]
Output: 4
Explanation:
At the beginning, you start at square 1 [at row 5, column 0].
You decide to move to square 2, and must take the ladder to square 15.
You then decide to move to square 17 (row 3, column 5), and must take the snake to square 13.
You then decide to move to square 14, and must take the ladder to square 35.
You then decide to move to square 36, ending the game.
It can be shown that you need at least 4 moves to reach the N*N-th square, so the answer is 4.
```
#### Note
1. `2 <= board.length = board[0].length <= 20`
2. `board[i][j]` is between `1` and `N*N` or is equal to `-1`.
3. The board square with number `1` has no snake or ladder.
4. The board square with number `N*N` has no snake or ladder.

### Solution
```java
class Solution {
    public int snakesAndLadders(int[][] board) {
        // Edge case
        if (board == null || board.length == 0 || board[0] == null || board[0].length == 0) return 0;
        // Initialisation
        int steps = 0;
        int width = board.length;
        int target = width * width;
        Queue<Integer> queue = new LinkedList<>();
        // square 1 is the starting porint
        queue.offer(1);
        board[width -1][0] = 0;
        // iterate all shortcuts in the stack first
        // The jist is that we return the steps needed for the fastest route because it reaches the end first.
        while (!queue.isEmpty()) {
            int size = queue.size();
            while (size-- > 0) {
                int cur = queue.poll();
                // Step 1 to 6, plus boundry checking
                for (int x = 1; x <= 6 && cur + x <= target; x++) {
                    if (cur + x == target) {
                        return steps + 1;
                    }
                    // calcualte location
                    int[] loc = getIndex(cur + x, width);
                    int i = loc[0];
                    int j = loc[1];
                    // Visited
                    if (board[i][j] == 0) continue;
                    // New square
                    if (board[i][j] == target)
                        return steps + 1;
                    // check whether a shortcut exists
                    int next = board[i][j] == -1 ? cur + x: board[i][j];
                    queue.offer(next);
                    // Mark as visitied
                    board[i][j] = 0;
                }
            }
            // Not at the finishing square yet, keep going
            steps++;
        }
        return -1;
    }

    public int[] getIndex(int cur, int width) {
        // top left is the ending point
        // bottom left is the starting point
        // Minus one to get the real index because squares starts at index 0
        int height = width;
        cur--;
        int i = width - (cur / width) - 1;
        // For odd row: count from left -> right
        // For even row: count from left <- right
        int j = (height - i) % 2 == 0 ? width - (cur % width)-1: cur % width;
        return new int[] {i, j};
    }

}
```