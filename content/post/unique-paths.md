---
title: "Unique Paths"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "java", "dynamic-programming"]
categories: ["algorithm"]
date: 2018-09-15T12:54:17-07:00
draft: false
archive: false
---
A robot is located at the top-left corner of a `m x n` grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

![unique paths](https://leetcode.com/static/images/problemset/robot_maze.png "Unique paths")  
Above is a `7 x 3` grid. How many possible unique paths are there?

#### Note m and n will be at most 100.

### Example 1
```
Input: m = 3, n = 2
Output: 3
```
### Explanation
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Right -> Down
2. Right -> Down -> Right
3. Down -> Right -> Right
### Example 2
```
Input: m = 7, n = 3
Output: 28
```

### Solution

```python
# Time: O(n*m)
# Space: O(n*m)
class Solution:
    def uniquePaths(self, m, n):
        """
        :type m: int
        :type n: int
        :rtype: int
        """
        grid = [[0 for x in range(m)] for y in range(n)]
        for row in range(n):
            for col in range(m):
                if row == 0 or col == 0:
                    grid[row][col] = 1
                else:
                    grid[row][col] = grid[row][col-1] + grid[row-1][col]
        print(grid[n-1][m-1])
        return(grid[n-1][m-1])
```

```java
// Time: O(m*n)
// Space: `O(n)`
class Solution {
    public int uniquePaths(int m, int n) {
        if (m == 0 || n == 0) {
            return 0;
        }

        int rows = m;
        int cols = n;
        int[] res = new int[cols];
        res[0] = 1;

        for (int i = 0; i < rows; i++) {
            for (int j = 1; j < cols; j++) {
                res[j] += res[j-1];
            }
        }
        return res[cols-1];
    }
}
```
