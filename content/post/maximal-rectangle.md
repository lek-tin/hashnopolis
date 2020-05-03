---
title: "Maximal Rectangle"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["leetcode", "java", "dynamic-programming"]
categories: ["algorithm"]
date: 2019-02-25T00:41:33-08:00
lastmod: 2020-04-28T21:41:33-08:00
draft: false
archive: false
---

Given a 2D binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.

### Example:
```
Input:
[
  ["1","0","1","0","0"],
  ["1","0","1","1","1"],
  ["1","1","1","1","1"],
  ["1","0","0","1","0"]
]
Output: 6
```
### Hint
Height:
```
1 0 1 0 0
2 0 2 1 1
3 1 3 2 2
4 0 0 3 0
```
Left:
```
0 0 2 0 0
0 0 2 2 2
0 0 2 2 2
0 0 0 3 0
```
Right:
```
1 5 3 5 5
1 5 3 5 5
1 5 3 5 5
1 5 5 4 5
```

### Solution:
```java
class Solution {
    public int maximalRectangle(char[][] matrix) {
        if (matrix.length == 0 || matrix[0].length == 0) {
            return 0;
        }

        int res = 0;
        int h = matrix.length;
        int w = matrix[0].length;
        int[] left = new int[w];
        int[] right = new int[w];
        int[] height = new int[w];
        Arrays.fill(right, w - 1);

        for (int i = 0; i < h; i++) {
            int curLeft = 0;
            int curRight = w - 1;
            for (int j = 0; j < w; j++) {
                if (matrix[i][j] == '1') height[j]++;
                else height[j] = 0;
            }

            for (int j = 0; j < w; j++) {
                if (matrix[i][j] == '1') {
                    left[j] = Math.max(left[j], curLeft);
                } else {
                    left[j] = 0;
                    curLeft = j + 1;
                }
            }

            for (int j = w - 1; j >= 0; j--) {
                if (matrix[i][j] == '1') {
                    right[j] = Math.min(right[j], curRight);
                } else {
                    right[j] = w - 1;
                    curRight = j - 1;
                }
            }

            // input:
            // [
            //   ["1","0","1","0","0"],
            //   ["1","0","1","1","1"],
            //   ["1","1","1","1","1"],
            //   ["1","0","0","1","0"]
            // ]
            //
            // System.out.printf("%d, %d, %d, %d, %d\n", left[0], left[1], left[2], left[3], left[4]);
            // System.out.printf("%d, %d, %d, %d, %d\n", right[0], right[1], right[2], right[3], right[4]);
            // System.out.printf("%d, %d, %d, %d, %d\n", height[0], height[1], height[2], height[3], height[4]);
            // System.out.println("-----");
            //
            // 0, 0, 2, 0, 0
            // 0, 4, 2, 4, 4
            // 1, 0, 1, 0, 0
            // -----
            // 0, 0, 2, 2, 2
            // 0, 4, 2, 4, 4
            // 2, 0, 2, 1, 1
            // -----
            // 0, 0, 2, 2, 2
            // 0, 4, 2, 4, 4
            // 3, 1, 3, 2, 2
            // -----
            // 0, 0, 0, 3, 0
            // 0, 4, 4, 3, 4
            // 4, 0, 0, 3, 0
            // -----

            for (int j = 0; j < w; j++) {
                res = Math.max(res, height[j] * (right[j] - left[j] + 1));
            }

        }

        return res;
    }
}
```
