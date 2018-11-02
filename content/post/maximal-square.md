---
title: "Maximal Square"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "python", "matrix", "dynamic-programming"]
categories: ["algorithm"]
date: 2018-11-01T23:18:11-07:00
draft: false
archive: false
---
Given a 2D binary matrix filled with `0`'s and `1`'s, find the largest square containing only `1`'s and return its area.

**Example:**
Input: 

1 0 1 0 0  
1 0 **1** **1** 1  
1 1 **1** **1** 1  
1 0 0 1 0  

Output: 4
**Solution:**
```python
class Solution:
    def maximalSquare(self, matrix):
        """
        :type matrix: List[List[str]]
        :rtype: int
        """
        area = 0
        
        if not matrix:
            return area

        # Edge case: single col matrix
        for i in range(len(matrix)):
            if matrix[i][0] == "1":
                matrix[i][0] = 1
                area = 1
        # Edge case: single row matrix
        for i in range(len(matrix[0])):
            if matrix[0][i] == "1":
                matrix[0][i] = 1
                area = 1

        for i in range(1, len(matrix)):
            for j in range(1, len(matrix[0])):
                if matrix[i][j] == "0":
                    matrix[i][j] = 0
                    continue
                localMin = min( int(matrix[i-1][j]), int(matrix[i-1][j-1]), int(matrix[i][j-1]) )
                print(int(matrix[i-1][j]), int(matrix[i-1][j-1]), int(matrix[i][j-1]))
                matrix[i][j] = localMin + 1
                if matrix[i][j] > area:
                    area = matrix[i][j]
        return area**2
```
